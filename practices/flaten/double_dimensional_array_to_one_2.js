'use strict';

function double_to_one(collection) {

  var result = [];
  collection.forEach(items =>{
      //查看每个一维数组的长度
      //console.log("长度：" + items.length);        //返回值为undefined
      //判断一个值是否为undefined
      if(items.length == undefined){
         result = push_new_item(result, items);            
      }
      else{
          items.forEach(item =>{
              result = push_new_item(result, item)       
          })
      }
  })
  console.log("最终结果：" + result);
  return result;
}

function push_new_item(result, a){
    if(result.indexOf(a) < 0){
        result.push(a);
    }
    return result;
}

module.exports = double_to_one;