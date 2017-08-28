'use strict';

function amount_even(collection) {
  return collection.filter(item => {
    return item % 2 === 0;
  }).reduce((x, y) => x + y);
}

module.exports = amount_even;
