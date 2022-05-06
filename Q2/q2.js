function zerosToTheEnd(arr){
    let arr1=[]
    for( let i=0 ; i <arr.length ; i++){
        if( arr[i] === 0){
            arr1.push(0)
            arr.splice(i,1);
        }
    }
    for(let i=0 ;i<arr1.length;i++){
        arr.push(0)}

    return arr
}
console.log( zerosToTheEnd([0, 1, null, 2, false, 1, 0]));

/*const moveZeros = (arr) => arr.sort((a, b) => (a === 0) - (b === 0))*/