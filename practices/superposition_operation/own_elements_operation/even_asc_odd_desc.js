'use strict';
var even_asc_odd_desc = function (collection) {
  let [arr1, arr2] = [[], []];
  collection.forEach(item => {
    (item % 2 === 0) ? arr1.push(item) : arr2.push(item);
  });
  return arr1.sort(compare1).concat(arr2.sort(compare2));
};

function compare1(n1, n2) {
  if (n1 > n2) {
    return 1;
  } else if (n1 === n2) {
    return 0;
  } else {
    return -1;
  }
}

function compare2(n1, n2) {
  if (n1 > n2) {
    return -1;
  } else if (n1 === n2) {
    return 0;
  } else {
    return 1;
  }
}

module.exports = even_asc_odd_desc;
