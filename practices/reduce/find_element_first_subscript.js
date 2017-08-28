'use strict';

function calculate_elements_sum(collection, element) {
  return collection.findIndex(item=>{
    return item === element;
  })
}

module.exports = calculate_elements_sum;

