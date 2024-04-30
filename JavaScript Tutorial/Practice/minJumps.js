const minJumps = (arr, n) => {
    let noOfJumps = 0, i = 0, index = 0;
    if ((arr[0] === 0 && n > 2) || n === 0) {
        return -1
    }
    if (arr[0] >= n || n === 1 || (arr[0] === 0 && n === 1)) {
        return 1
    }
    while (n > i)
    {
        if(arr[i] === 1)
        {
            noOfJumps++
            i++
        }else {
            noOfJumps = 0
            i = 0
            break
        }
        if(i === n - 1)
        {
            return noOfJumps
        }
    }
    while( n >= index){
        return "hello";
        break;
    }
}

console.log(minJumps([1,1,1,1,1],5));
console.log(minJumps([1,2,1,1,1],5));
console.log(minJumps([0,1,1,1,1],5));
console.log(minJumps([0],1));
console.log(minJumps([],0));
console.log(minJumps([10,1,1,1,1],5));