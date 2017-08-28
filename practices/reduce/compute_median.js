'use strict';

function compute_median(collection) {
  //在这里写入代码
  let result;
  collection = collection.sort(compare);
  let mid = parseInt(collection.length / 2);

  if (collection.length % 2 === 0) {
    result = (collection[mid] + collection[mid - 1]) / 2;
  } else {
    result = collection[mid];
  }
  return result;
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

module.exports = compute_median;


