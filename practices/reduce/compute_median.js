'use strict';

function compute_median(collection) {
  //在这里写入代码
  let result;
  let mid = parseInt(collection.length/2);
  if(collection.length%2 === 0){
    result =  (collection[mid] +collection[mid-1]) / 2;
  }else{
    result =  collection[mid];
  }
  return result;
}

module.exports = compute_median;


