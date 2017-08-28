'use strict';

function hybrid_operation(collection) {
  let arr = collection.map(item =>{
    return item*3+2;
  })
  return arr.reduce((x,y)=>x+y);
}

module.exports = hybrid_operation;

