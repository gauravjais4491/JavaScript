let globeVal="i am a globle variable";
function scopeTest(){
    let localVal="i am a local variable";
    console.log(globeVal);
    console.log(localVal);
}

scopeTest();
console.log(localVal);
console.log("Hello")

