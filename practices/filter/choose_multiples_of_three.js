'use strict';

var choose_multiples_of_numbers = require("../comFunction/choose_multiples_of_numbers.js");
/**
 * 找出3的倍数
 */

function choose_multiples_of_three(collection) {
  //在这里写入代码
  var result = choose_multiples_of_numbers(collection, 3);
  console.log(result);
  return result;
}

module.exports = choose_multiples_of_three;
