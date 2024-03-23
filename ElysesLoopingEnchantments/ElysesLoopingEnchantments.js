export function cardTypeCheck(stack, card) {
  let counter = 0;
  stack.forEach((cardItem) => {
    if (cardItem === card) {
      counter++;
    }
  });
  return counter;
}

export function determineOddEvenCards(stack, type) {
  const oddArray = [];
  const evenArray = [];
  for (let card in stack) {
    if (stack[card] % 2 !== 0) {
      oddArray.push(stack[card]);
    } else {
      evenArray.push(stack[card]);
    }
  }

  if (type) {
    return evenArray.length;
  } else {
    return oddArray.length;
  }
}
