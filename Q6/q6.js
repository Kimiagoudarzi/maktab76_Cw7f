function secret(str){
    let arr = str.split("*");
    for(let i =0;  i< arr[1];  i++){
        console.log(`<${arr[0]}></${arr[0]}>`);
    }
  }
  
  secret("div*2");
  
  
  
  
  
  
  
  
  
  // Create a function based on the input and output. Look at the examples, there is a pattern.