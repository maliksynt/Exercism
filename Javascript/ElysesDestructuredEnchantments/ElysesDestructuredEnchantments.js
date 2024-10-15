export function getFirstCard(deck) {
  const [a] = deck;
  return a;
}

export function getSecondCard(deck) {
  const [, b] = deck;
  return b;
}

export function swapTopTwoCards(deck) {
  const [a, b, ...rest] = deck;
  return [b, a, ...rest];
}

export function discardTopCard(deck) {
  const [a, ...rest] = deck;
  return [a, rest];
}

const FACE_CARDS = ["jack", "queen", "king"];

export function insertFaceCards(deck) {
  const [firstCard, ...rest] = deck;
  return [firstCard, ...FACE_CARDS, ...rest];
}
