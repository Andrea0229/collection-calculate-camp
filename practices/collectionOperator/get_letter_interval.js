'use strict';

/**
 * 给定数字区间写出所有的小写字母（升、降）
 */
function get_letter_interval(number_a, number_b) {
    var result = [];

    if(number_a < number_b){
        for(var num=number_a; num<=number_b; num++)
            result.push(String.fromCodePoint(96 + parseInt(num)));
    }
    else{
        for(var num=number_a; num>=number_b; num--)
            result.push(String.fromCodePoint(96 + parseInt(num)));
    }
//    console.log(result);
   return result;
}

module.exports = get_letter_interval;
