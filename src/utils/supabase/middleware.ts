import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const { data: { user } } = await supabase.auth.getUser()

  // ROLE BASED ROUTING LOGIC
  const path = request.nextUrl.pathname
  const isAuthRoute = path === '/login' || path === '/register'
  
  if (user) {
    // If user is logged in and tries to access login/register, redirect to their home
    if (isAuthRoute) {
      // We need to fetch their profile role from a custom table 'profiles', 
      // or we can rely on raw_user_meta_data if stored there.
      // Assuming we fetch from profiles:
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()
        
      const role = profile?.role || 'customer'
      if (role === 'admin') {
        return NextResponse.redirect(new URL('/shop/calendar', request.url))
      } else {
        return NextResponse.redirect(new URL('/app/dashboard', request.url))
      }
    }

    // Role Guard
    if (path.startsWith('/shop')) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()
        
      if (profile?.role !== 'admin') {
        return NextResponse.redirect(new URL('/app/dashboard', request.url))
      }
    }
  } else {
    // If no user, protect /app and /shop routes
    if (path.startsWith('/app') || path.startsWith('/shop')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return supabaseResponse
}
