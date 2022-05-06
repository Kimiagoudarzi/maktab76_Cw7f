function keyboardMistakes(str){
    let a = str.replace("4", "A").replace(5,'s').replace(0,'O').replace(1,'I');
    return a;
}
console.log(keyboardMistakes("MUB45H1R"));







// Keyboard Mistakes Find
// Examples
// keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"
// keyboardMistakes("DUBL1N") ➞ "DUBLIN"
// 4--->A
// 5--->S
// 0--->O
// 1--->I