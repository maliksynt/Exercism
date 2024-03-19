export const cookingStatus = (timer) => {
  if (timer === 0) {
    return "Lasagna is done.";
  } else if (timer > 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
};
