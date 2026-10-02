import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barber SaaS - Premium White Label",
  description: "Modern, luxury booking platform for Barber Shops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="luxury-gold"
          enableSystem={false}
          themes={['luxury-gold', 'classic-barber', 'neon-cyber', 'minimal-light']}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
