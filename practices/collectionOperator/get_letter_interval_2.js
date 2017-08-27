'use strict';

/*
 * 给定区间输出字母组合
 */
function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
   var letters = [];        //var字母
   var result = [];
   
   letters.push('z');
  for(var i=1; i<26; i++){
       letters.push(String.fromCodePoint(parseInt(i) + 96));
  }
    if(number_a < number_b){
        for(let num=number_a; num<=number_b; num++){
            result.push(convert(num, letters));
        }
    }
    else{
        for(let num=number_a; num>=number_b; num--){
            result.push(convert(num, letters));
        }
    }
    
   return result;
}

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

module.exports = get_letter_interval_2;