export function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`;
}

export function buildBirthdaySign(age) {
  return `Happy Birthday! What a ${
    age < 50 ? "young" : "mature"
  } fellow you are.`;
}

export function graduationFor(name, year) {
  return `Congratulations ${name}!\nClass of ${year}`;
}

export function costOf(sign, currency) {
  const arraySign = sign.split("");
  let price = arraySign.length * 2 + 20;

  return `Your sign costs ${price.toFixed} ${currency}.`;
}
