'use strict';

/**
 * 给定数组中找到n的倍数
 */

function choose_multiples_of_three(collection, number) {

  //在这里写入代码
  var result = [];
  collection.forEach(item =>{
      if(item%number === 0)
        result.push(item);
  })
  return result;
  
}

module.exports = choose_multiples_of_three;
