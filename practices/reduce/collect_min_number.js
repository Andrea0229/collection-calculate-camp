'use strict';

/*
 * 最小
 */
function collect_min_number(collection) {
  //在这里写入代码
  var min = collection[0];
  for(let item of collection){
      if(item < min){
          min = item;
      }
  }
  
  return min;
}

module.exports = collect_min_number;

