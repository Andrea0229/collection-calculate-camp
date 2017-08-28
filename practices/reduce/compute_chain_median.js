'use strict';

function getListArr(collection) {
  return collection.split("->").map(item => {
    return Number(item);
  })
}

function compare(n1, n2) {
  if (n1 > n2) {
    return 1;
  }else if(n1 === n2){
    return 0;
  }else{
    return -1;
  }
}

function compute_chain_median(collection) {
  let result;
  let arr = getListArr(collection);
  arr = arr.sort(compare);
  let mid = parseInt(arr.length / 2);

  if (arr.length % 2 === 0) {
    result = (arr[mid] + arr[mid - 1]) / 2;
  } else {
    result = arr[mid];
  }
  return result;
}

module.exports = compute_chain_median;
