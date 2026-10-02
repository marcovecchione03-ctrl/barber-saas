/**
 * Mock Availability Engine for Phase 3 MVP.
 * In a real scenario, this would fetch from Supabase.
 */

export interface TimeSlot {
  time: string; // e.g. "09:00"
  available: boolean;
}

export function generateTimeSlots(
  startTime: string = "09:00",
  endTime: string = "19:00",
  intervalMinutes: number = 30
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  let [currentHour, currentMinute] = startTime.split(':').map(Number);
  const [endHour, endMinute] = endTime.split(':').map(Number);
  
  const endTotalMinutes = endHour * 60 + endMinute;

  while (currentHour * 60 + currentMinute < endTotalMinutes) {
    const timeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
    
    // Simulate some slots being randomly unavailable for realism in MVP
    const isAvailable = Math.random() > 0.3;
    
    slots.push({
      time: timeString,
      available: isAvailable
    });

    currentMinute += intervalMinutes;
    if (currentMinute >= 60) {
      currentHour += Math.floor(currentMinute / 60);
      currentMinute = currentMinute % 60;
    }
  }

  return slots;
}
