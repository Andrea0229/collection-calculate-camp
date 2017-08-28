'use strict';

function median_to_letter(collection) {
  let result;
  collection = collection.sort(compare);
  let mid = parseInt(collection.length / 2);

  if (collection.length % 2 === 0) {
    result = Math.ceil((collection[mid] + collection[mid - 1]) / 2);
  } else {
    result = collection[mid];
  }

  return String.fromCodePoint(parseInt(result / 10) + 96) +
    String.fromCodePoint(parseInt(result % 10) + 96)
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

module.exports = median_to_letter;
