function deNest(arr){
    let array = arr.flat(Infinity);
    return array[0];
  }
  console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));
  console.log(deNest([[[[[[[true]]]]]]]) );
  
  
  
  
  
  
  
  // Create a function that returns the original value from a matrix with too many sub-arrays.
  // Examples
  // deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3
  // deNest([[[[[[[true]]]]]]]) ➞ true
  // deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"