'use strict';

/**
 * 找出最大值
 */

function collect_max_number(collection) {
  //在这里写入代码
  var max = collection[0];
  for(let item of collection){
      if(item > max){
          max = item;
      }
  }
  
  return max;
}

module.exports = collect_max_number;
