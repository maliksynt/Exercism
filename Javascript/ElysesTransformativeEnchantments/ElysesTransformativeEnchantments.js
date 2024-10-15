export const seeingDouble = (deck) => deck.map((i) => i * 2);

export const threeOfEachThree = (deck) => {
  const newArr = [];
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] === 3) {
      newArr.push(3, 3, 3);
    } else {
      newArr.push(deck[i]);
    }
  }
  return newArr;
};

export function middleTwo(deck) {
  const medianCard = Math.floor(deck.length / 2);
  const medianSup = medianCard + 1;
  return deck.slice(medianCard - 1, medianSup);
}

export function sandwichTrick(deck) {
  const extremeElement = [deck[0], deck[deck.length - 1]];
  extremeElement.reverse();
  deck.shift();
  deck.pop();
  deck.splice(deck.length / 2, 0, ...extremeElement);
  return deck;
}

export function twoIsSpecial(deck) {
  for (let i = deck.length - 1; i >= 0; i--) {
    if (deck[i] !== 2) {
      deck.splice(i, 1);
    }
  }
  return deck;
}

export const perfectlyOrdered = (deck) => deck.sort((a, b) => a - b);

export const reorder = (deck) => deck.reverse();
