'use strict';

/**
 * 将二维数组转换为一维数组并按出现顺序存储
 */

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  collection.forEach(items =>{
      //查看每个一维数组的长度
      //console.log("长度：" + items.length);        //返回值为undefined
      //判断一个值是否为undefined
      if(items.length == undefined){

/*          console.log(items + '是一个数');
          //将一个数可以转换为数组吗-------------并不可以
          let temp = item;
          items.length = 1;
          items[0] = temp;
          console.log(items + '是一个数组');
*/
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
