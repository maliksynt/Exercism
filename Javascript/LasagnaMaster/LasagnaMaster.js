export const cookingStatus = (timer) => {
  if (timer === 0) {
    return "Lasagna is done.";
  } else if (timer > 0) {
    return "Not done, please wait.";
  } else {
    return "You forgot to set the timer.";
  }
};

export const preparationTime = (layer, timePerLayer) => {
  if (timePerLayer) {
    return layer.length * timePerLayer;
  } else {
    return layer.length * 2;
  }
};

export const quantities = (layers) => {
  const obj = {
    noodles: 0,
    sauce: 0,
  };

  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === "noodles") {
      obj.noodles += 50;
    }
    if (layers[i] === "sauce") {
      obj.sauce += 0.2;
    }
  }
  return obj;
};

export const addSecretIngredient = (list1, list2) => {
  const lastItem = list1.slice(-1)[0];
  list2.push(lastItem);
};

export const scaleRecipe = (recipe, portions) => {
  const newRecipe = {};

  for (let key in recipe) {
    const amount = recipe[key] / 2;
    newRecipe[key] = amount * portions;
  }

  return newRecipe;
};
