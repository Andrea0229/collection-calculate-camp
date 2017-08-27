'use strict';
/**
 * 数字映射为字母
 */
var number_map_to_word = function(collection){
    var result = [];
    for(let item of collection){
        result.push(String.fromCodePoint(96 + parseInt(item)));
    }
    
  return result;
};

module.exports = number_map_to_word;
