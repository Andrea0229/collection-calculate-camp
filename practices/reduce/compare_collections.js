'use strict';
/**
 * 判断ji'hejihe是否相等
 * 还有其他好多情况没有判断
 */

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
    if(collection_a.length != collection_b.length)
        return false;
    for(let i=0; i<collection_a.length; i++){
        if(collection_a[i] != collection_b[i]){
            return false;
        }
            
    }
    return true;

}

module.exports = compare_collections;


