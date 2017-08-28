'use strict';

function average_uneven(collection) {
  let [count, sum] = [0, 0];
  collection.forEach(item => {
    if (item % 2 === 1) {
      count++;
      sum += item;
    }
  })
  return sum / count;
}

module.exports = average_uneven;
