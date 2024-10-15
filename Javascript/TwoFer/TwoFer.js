export const twoFer = (name) => {
  if (name === "" || name == null) {
    return "One for you, one for me.";
  } else {
    console.log(name);
    return `One for ${name}, one for me.`;
  }
};
