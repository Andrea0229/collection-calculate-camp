function collect_same_elements(collection_a, object_b) {
  var result = []
    var arr_a = [];
    var arr_b = [];
   
    collection_a.forEach(collection =>{          //将objectB中的每个元素的kkey值cu存放在arr数组中
        arr_a.push(collection.key);
    })

    object_b.value.forEach(ch =>{
        arr_b.push(ch);
    })
   
  
 //   console.log("--------------------------------------"+arr);
    arr_a.forEach(item =>{
        if(arr_b.indexOf(item) >= 0)
            result.push(item);
    })
    
    return result;
}

module.exports = collect_same_elements;
