'use strict';

function even_to_letter(collection) {
  let result = [];
  collection.forEach(item=>{
    if(item%2===0){
      result.push(String.fromCodePoint( parseInt(item) + 96 )) ;
    }
  });
  return result;
}

module.exports = even_to_letter;
