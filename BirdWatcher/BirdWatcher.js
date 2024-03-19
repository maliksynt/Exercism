export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((acc, current) => acc + current, 0);
}

export function birdsInWeek(birdsPerDay, week) {
  let startIndex = (week - 1) * 7;
  let endIndex = startIndex + 7;
  const weekArray = [];

  for (let i = startIndex; i < endIndex; i++) {
    weekArray.push(birdsPerDay[i]);
  }

  return weekArray.reduce((acc, current) => acc + current, 0);
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    birdsPerDay[i] += 1;
    i++;
  }
  return birdsPerDay;
}
