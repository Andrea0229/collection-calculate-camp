'use strict';

/*
 * a集合中可以被b集合整除的数
 */

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  
  collection_a.forEach(item=>{
      for(let i=0; i<collection_b.length; i++){
          if(item%collection_b[i] === 0){
              result.push(item);
              break;
          }
      }
    
  })
 
  return result;
}

module.exports = choose_divisible_integer;
