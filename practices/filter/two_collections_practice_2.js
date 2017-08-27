'use strict';

/*
 * 集合b中不包含a的元素
 */
function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  
  collection_a.forEach(item=>{
      if(collection_b.indexOf(item) < 0)
        result.push(item);
  })
  return result;
}

module.exports = choose_no_common_elements;
