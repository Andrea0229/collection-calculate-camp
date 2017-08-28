'use strict';
/**
 * 计算第偶数个元素的平均数
 * @param collection
 */
var calculate_average = function(collection){
  let [count,sum] = [0,0];
  for(let i=0; i<collection.length; i++){
    if(i%2 === 1){
      sum += collection[i];
      count++;
    }
  }
  return sum/count;
};
module.exports = calculate_average;
