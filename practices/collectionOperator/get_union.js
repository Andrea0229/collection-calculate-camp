'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码若a中没有b则添加
  var result = collection_a;
  collection_b.forEach(item =>{
      if(collection_a.indexOf(item) < 0){
          result.push(item);
      }
  })
 // console.log("====================="+result);
  return result;
}

module.exports = get_union;

