'use strict';

/*
 * 统计数组中每个数字出现的次数
 */

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  collection.forEach(item =>{
      if(result[item] >0 ){
          result[item] += 1;
         
      }else{
//          let dict = {item : 1};
          result[item] = 1;
//          result.push(dict);
      }
  })
 
  return result;
  
}

module.exports = grouping_count;
