'use strict';

function get_intersection(collection_a, collection_b) {
    var result = [];
    //b是否在a中出现若出现则为交集
    collection_b.forEach(item =>{
        if(collection_a.indexOf(item) >= 0){
            result.push(item);    
        }   
    })
    return result;
}

module.exports = get_intersection;
