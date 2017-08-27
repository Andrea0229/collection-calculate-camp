'use strict';

/*
 * 获取a集合中包含b集合的元素
 */

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  
  collection_a.forEach(item=>{
      if(collection_b.indexOf(item) >= 0)
        result.push(item);
  })
  return result;
}

module.exports = choose_common_elements;
