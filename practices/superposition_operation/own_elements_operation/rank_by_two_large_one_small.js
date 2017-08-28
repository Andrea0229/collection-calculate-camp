'use strict';

/**
 * 两大一小
 * @param collection
 * @returns {Array.<T>|*}
 */

function rank_by_two_large_one_small(collection) {
  collection = collection.sort(compare);
  for (let i = 0; i < collection.length; i=i+3) {
    if (i + 2 < collection.length) {
      let temp = collection[i + 2];
      collection[i + 2] = collection[i];
      collection[i] = collection[i + 1];
      collection[i + 1] = temp;
    }
  }

  return collection;
}

function compare(n1, n2) {
  if (n1 > n2) {
    return 1;
  } else if (n1 === n2) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = rank_by_two_large_one_small;
