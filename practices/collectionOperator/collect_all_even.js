'use strict';

/*
 * 从给定数组中输出所有偶数
 */
function collect_all_even(collection) {
  //在这里写入代码
  var result  = [];
  collection.forEach(item =>{
      if(item % 2 == 0)
        result.push(item);
  })
  return result;
}

module.exports = collect_all_even;
