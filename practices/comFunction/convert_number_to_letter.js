'use strict';
/**
 * 数字转换为字母
 */

function convert_toLetter(num, letters){
    console.log("到了吗");
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
