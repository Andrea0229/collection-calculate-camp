'use strict';

/*
 * 从给定数组中输出所有偶数
 */
function collect_all_even(collection) {
  return collection.filter(item=>{
    return (item%2 === 0);
  })
}

module.exports = collect_all_even;
