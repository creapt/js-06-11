
const add = (x, y) => (+x) + (+y);
const sub = (x, y) => (+x) - (+y);
const mult= (x, y) => (+x) * (+y);
const divide = (x, y) => (+x) / (+y);

const validateNumbers = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return true;
}

module.exports = {
  add,
  sub,
  mult,
  divide,
  validateNumbers,
}