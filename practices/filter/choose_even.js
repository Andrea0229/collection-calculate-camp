'use strict';

/**
 * 获取给定数组中所有ous偶数
 */
var collect_all_even = require("../collectionOperator/collect_all_even.js");

function choose_even(collection) {

  //在这里写入代码
  var result = collect_all_even(collection);
//  console.log(result);
  return result;
}

module.exports = choose_even;
