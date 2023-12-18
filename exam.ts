// Question 1/4
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
  const hourAngle = 30 * twelveHour + 0.5 * minute;
  let angle = Math.abs(hourAngle - minuteAngle);

  if (angle > 180) {
    angle = 360 - angle;
  }

  return angle;
}

// console.log(getClockAngle("17:30"));

// Question 2/4



// Question 3/4
function quickestPath(board: {
  ladders: [number, number][];
  snakes: [number, number][];
}): number[] {
  const ladders = new Map<number, number>();
  const snakes = new Map<number, number>();

  board.ladders.forEach(([start, end]) => ladders.set(start, end));
  board.snakes.forEach(([head, tail]) => snakes.set(head, tail));

  const visited: boolean[] = new Array(101).fill(false);
  const queue: [number, number[]][] = [[1, []]]; // [position, rolls]

  while (queue.length > 0) {
    const [currentPos, rolls] = queue.shift()!;
    visited[currentPos] = true;

    if (currentPos === 100) {
      return rolls;
    }

    for (let i = 1; i <= 6; i++) {
      const nextPos = currentPos + i;

      if (nextPos > 100) {
        continue;
      }

      const finalPos = ladders.get(nextPos) || snakes.get(nextPos) || nextPos;
      if (!visited[finalPos]) {
        queue.push([finalPos, [...rolls, i]]);
      }
    }
  }

  return [];
}

// console.log(
//   quickestPath({
//     ladders: [
//       [3, 39],
//       [14, 35],
//       [31, 70],
//       [44, 65],
//       [47, 86],
//       [63, 83],
//       [71, 93],
//     ],
//     snakes: [
//       [21, 4],
//       [30, 8],
//       [55, 38],
//       [79, 42],
//       [87, 54],
//       [91, 48],
//       [96, 66],
//     ],
//   })
// );

// Question 4/4










