export function frontDoorResponse(line) {
  const firstLetter = line[0];
  return firstLetter;
}
export function frontDoorPassword(word) {
  const minuscule = word.toLowerCase();
  const capitalize = `${minuscule[0].toUpperCase()}${minuscule.slice(1)}`;
  return capitalize;
}
export function backDoorResponse(line) {
  const trimmed = line.trim();
  const lastLetter = trimmed[trimmed.length - 1];
  return lastLetter;
}
export function backDoorPassword(word) {
  const capitalized = frontDoorPassword(word);
  return capitalized + ", please";
}
