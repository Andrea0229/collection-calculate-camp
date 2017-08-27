'use strict';

function compute_average(collection) {
  //在这里写入代码
  let result = 0
  collection.forEach(item=>{
    result += item;
  })
  return result/collection.length;

}

module.exports = compute_average;

