// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Green Garden":
      return 1.5;
    case "Energizer":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let counter = 0;
  let i = 0;
  let toCut = 0;

  while (counter < wedgesNeeded && i < limes.length) {
    switch (limes[i]) {
      case "small":
        counter = counter + 6;
        toCut++;
        break;
      case "medium":
        counter = counter + 8;
        toCut++;
        break;
      case "large":
        counter = counter + 10;
        toCut++;
        break;
    }
    i++;
  }
  return toCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const tempsTotalRestant = [];
  let timeCounter = 0;
  let jusCounter = 0;

  for (let i = 0; i < orders.length; i++) {
    tempsTotalRestant.push(timeToMixJuice(orders[i]));
  }

  while (timeCounter < timeLeft && tempsTotalRestant.length > 0) {
    timeCounter = timeCounter + tempsTotalRestant[jusCounter];
    orders.shift();
    tempsTotalRestant.shift();
  }

  return orders;
}
