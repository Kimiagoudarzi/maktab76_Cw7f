function deleteItem(arr){
    let [a,b, ...rest] = arr;
    return rest;
  }
  
  console.log(deleteItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  
  
  
  
  
  
  
  // Use destructuring assignment with the rest parameter sub-array of
  //  the original array source with the first two elements omitted
  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // [3, 4, 5, 6, 7, 8, 9, 10]