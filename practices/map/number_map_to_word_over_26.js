'use strict';

//var convert_toLetter = require('../comFunction/convert_number_to_letter.js');     //有问题
var number_map_to_word_over_26 = function(collection){
    
    var result = [];
    var letters = [];        //var字母
    letters.push('z');
    for(var i=1; i<26; i++){
       letters.push(String.fromCodePoint(parseInt(i) + 96));
    }
    for(let item of collection){
        let words = convert(item, letters);
//        console.log("w++++++++++++++++++"+words);
        result.push(words);
    }
//    console.log("-------------------"+result);
  return result;
};

function convert(num, letters){
    var ch = '';
    let i = parseInt(num/26);
    let j = num%26;
    
    if(j === 0){            //需要加异常判断
        i--;
    }
    
    if(i)
      ch = letters[i];
    ch += letters[j];
    return ch;
}

module.exports = number_map_to_word_over_26;
