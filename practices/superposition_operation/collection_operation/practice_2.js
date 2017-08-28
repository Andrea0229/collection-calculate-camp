'use strict';

function hybrid_operation_to_uneven(collection) {
  let arr = [];
  for(let item of collection){
    if(item % 2 === 1){
      arr.push(item*3+2)
    }
  }
  return arr;
}

module.exports = hybrid_operation_to_uneven;

