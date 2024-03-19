/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((acc, current) => acc + current, 0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let startIndex = (week - 1) * 7;
  let endIndex = startIndex + 7;
  const weekArray = [];

  for (let i = startIndex; i < endIndex; i++) {
    weekArray.push(birdsPerDay[i]);
  }

  return weekArray.reduce((acc, current) => acc + current, 0);
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    birdsPerDay[i] += 1;
    i++;
  }
  return birdsPerDay;
}
