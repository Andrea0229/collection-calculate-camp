function collect_same_elements(collection_a, object_b) {
  var arr=[];                     //将objectB中的值存入arr数组当中
    var result = [];
    object_b.value.forEach(ch =>{
        arr.push(ch);
    })
    
    collection_a.forEach(item =>{
        if(arr.indexOf(item) >= 0)
            result.push(item);
    })
    
    return result;
}

module.exports = collect_same_elements;
