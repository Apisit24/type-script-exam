function getClockAngle(hh_mm: string): number {
  // Extract hour and minute from the input string
  const [hourStr, minuteStr] = hh_mm.split(":");

  // Parse the hour and minute as integers
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);

  // Validate input
  if (
    isNaN(hour) ||
    isNaN(minute) ||
    hour < 0 ||
    hour >= 24 ||
    minute < 0 ||
    minute >= 60
  ) {
    throw new Error('Invalid input. Time should be in the format "hh:mm".');
  }

  // Convert 24-hour format to 12-hour format
  const twelveHour = hour > 12 ? hour - 12 : hour;

  // Calculate and return the clock angle
  const minuteAngle = 6 * minute;
  const hourAngle = (30 * twelveHour) + (0.5 * minute);
  let angle = Math.abs(hourAngle - minuteAngle);
  
  if (angle > 180) {
    angle = 360 - angle;
  }

  return angle;
}

const result = getClockAngle("11:30");
console.log(`=== ${result}`);
