function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var list_b = object_b.value;
    collection_a.forEach(item =>{
        if(list_b.indexOf(item.key) >= 0)
            item.count = item.count - parseInt(item.count/3);      
    })

  return collection_a;
}

module.exports = create_updated_collection;
