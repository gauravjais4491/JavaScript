let globalVar="i am a global variable";
function scopeTest(){
    let localVar="I am a local variable";
    console.log(localVar);
    console.log(globalVar);
}
scopeTest();
console.log(localVar);
