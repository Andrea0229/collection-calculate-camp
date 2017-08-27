'use strict';

/**
 * 给定两个数，写出区间的所有数字（升或降）
 */
function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if(number_a < number_b){
      for(let i=number_a; i<=number_b; i++){
          result.push(i);
      }
  } 
  else{
      for(let i=number_a; i>=number_b; i--){
          result.push(i);
      }
  }

   return result;
}

module.exports = get_integer_interval;

