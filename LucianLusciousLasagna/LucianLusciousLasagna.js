export const PREPARATION_MINUTES_PER_LAYER = 2;

export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(actualMinutesInOven) {
  const remainingMinutes = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
  return remainingMinutes;
}

export function preparationTimeInMinutes(numberOfLayers) {
  const preparationTime = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
  return preparationTime;
}

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  const prep = preparationTimeInMinutes(numberOfLayers);
  const totalTime = prep + actualMinutesInOven;
  return totalTime;
}
