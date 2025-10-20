let MathModule = function () {};

MathModule.prototype.square = function (number) {
  return number * number;
};
MathModule.prototype.squareRoot = function (number) {
  return Math.sqrt(number);
};
MathModule.prototype.cube = function (number) {
  return number * number * number;
};
MathModule.prototype.cubeRoot = function (number) {
  return Math.cbrt(number);
};

MathModule.prototype.quadraticEquation = function (a, b, c) {
  let delta = b * b - 4 * a * c;
  if (delta < 0) {
    return `Równanie nie posiada rozwiązań rzeczywistych ponieważ delta wynosi: ${delta}`;
  } else if (delta === 0) {
    return -b / (2 * a);
  } else {
    const sqrtDelta = Math.sqrt(delta);
    const x1 = (-b - sqrtDelta) / (2 * a);
    const x2 = (-b + sqrtDelta) / (2 * a);
    return [x1, x2];
  }
};

module.exports = exports = MathModule;
