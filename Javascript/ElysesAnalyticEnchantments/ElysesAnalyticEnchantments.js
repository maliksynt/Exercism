export const getCardPosition = (stack, card) => stack.indexOf(card);

export const doesStackIncludeCard = (stack, card) => stack.includes(card);

export const isEachCardEven = (stack) => stack.every((num) => num % 2 === 0);

export const doesStackIncludeOddCard = (stack) =>
  stack.some((x) => x % 2 !== 0);

export const getFirstOddCard = (stack) => stack.find((x) => x % 2 !== 0);

export const getFirstEvenCardPosition = (stack) =>
  stack.findIndex((x) => x % 2 === 0);
