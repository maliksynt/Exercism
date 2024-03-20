export function translate2d(dx, dy) {
  let translateX = dx;
  let translateY = dy;
  return (x, y) => {
    return [translateX + x, translateY + y];
  };
}

export function scale2d(sx, sy) {
  let scaleX = sx;
  let scaleY = sy;
  return (x, y) => {
    return [scaleX * x, scaleY * y];
  };
}

export function composeTransform(f, g) {
  let initialTransform = f;
  let subsequentTransform = g;
  return function (x, y) {
    let initialResult = initialTransform(x, y);
    let finalResult = subsequentTransform(initialResult[0], initialResult[1]);
    return finalResult;
  };
}

export function memoizeTransform(f) {
  let initialScaleFunction = f;
  let lastResult = null;
  let lastX = null;
  let lastY = null;

  return (x, y) => {
    if (x === lastX && y === lastY) {
      return lastResult;
    } else {
      lastResult = initialScaleFunction(x, y);
      lastX = x;
      lastY = y;
      return lastResult;
    }
  };
}
