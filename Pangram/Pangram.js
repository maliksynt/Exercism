//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const isPangram = (sentence) => {
  let isPangram = true;
  const arrOfLetters = sentence
    .toUpperCase()
    .split("")
    .filter((letter) => letter !== " ");

  for (let key in alphabet) {
    if (!arrOfLetters.includes(alphabet[key])) {
      isPangram = false;
    }
  }
  return isPangram;
};
