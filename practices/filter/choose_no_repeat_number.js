'use strict';

/*
 * 选出数组中出现的数字（不重复）
 */
function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [];
  collection.forEach(item =>{
      if(result.indexOf(item) <0 ){
          result.push(item)
      }
  })
  return result;
}

module.exports = choose_no_repeat_number;
