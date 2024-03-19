/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return (ratePerHour *= 8);
}
/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  const prixParJour = dayRate(ratePerHour);
  const joursTotal = Math.floor(budget / prixParJour);
  return joursTotal;
}
/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const billableDays = 22;
  let rest = numDays % billableDays;
  let discountedDays = numDays - rest;
  let reduction = ratePerHour * discount;
  let tarifApresReduction = ratePerHour - reduction;
  let prixParJourSansReduction = dayRate(ratePerHour);
  let prixParJoursAvecReduction = dayRate(tarifApresReduction);
  let prixTotalSansReduction = rest * prixParJourSansReduction;
  let prixTotalAvecReduction = discountedDays * prixParJoursAvecReduction;
  let prixFinal = Math.ceil(prixTotalAvecReduction + prixTotalSansReduction);
  return prixFinal;
}
