const { rando, randoSequence } = require('@nastyox/rando.js');

export default function () {
  let randomColor = Math.round(16777215 * rando());
  randomColor = `#${randomColor.toString(16)}`;
  return randomColor;
}
