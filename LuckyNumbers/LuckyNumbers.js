export function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}

export function luckyNumber(value) {
  const normalValue = String(value).split("");
  const normalValueToString = normalValue.join("");
  const reversedValue = normalValue.reverse();
  const reversedValueToString = reversedValue.join("");

  return Number(normalValueToString) === Number(reversedValueToString);
}

export function errorMessage(input) {
  if (input === "" || input == null) {
    return "Required field";
  }
  const inputNumber = Number(input);

  if (isNaN(inputNumber) || inputNumber === 0) {
    return "Must be a number besides 0";
  } else {
    return "";
  }
}
