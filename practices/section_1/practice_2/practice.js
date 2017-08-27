function collect_same_elements(collection_a, collection_b) {
  var result = [];
    var arr = [];
    collection_b.forEach(str => {
        str.forEach(ch =>{
            arr.push(ch);
        })
        
    })
 //   console.log("arr------------------------------------------:"+arr);
    
    collection_a.forEach(item =>{
        if(arr.indexOf(item) >= 0)
            result.push(item);
    })
  
//    console.log("result-------------------------------------------------"+result)
  return result;
}

module.exports = collect_same_elements;
