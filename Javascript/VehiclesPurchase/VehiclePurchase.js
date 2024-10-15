export function needsLicense(kind) {
  const need = ["car", "truck"];
  return need.includes(kind);
}

export function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return `${option1} is clearly the better choice.`;
  } else {
    return `${option2} is clearly the better choice.`;
  }
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8;
  }
  if (age >= 3 && age < 11) {
    return originalPrice * 0.7;
  }
  if (age >= 11) {
    return originalPrice * 0.5;
  }
}
