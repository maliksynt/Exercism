export function dayRate(ratePerHour) {
  return (ratePerHour *= 8);
}

export function daysInBudget(budget, ratePerHour) {
  const prixParJour = dayRate(ratePerHour);
  const joursTotal = Math.floor(budget / prixParJour);
  return joursTotal;
}

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
