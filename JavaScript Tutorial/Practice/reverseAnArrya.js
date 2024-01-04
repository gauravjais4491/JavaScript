function reverse(str) {
    if (!str || str.length < 2 || typeof str != 'string') {
        return 'Invalid String'
    }
    const backwards = []
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    }
    return backwards.join('')
}
function reverse2(str) {
    if (!str || str.length < 2 || typeof str != 'string') {
        return 'Invalid String'
    }

    return str.split('').reverse().join('')
}
const reverse3 = str => {
    if (!str || str.length < 2 || typeof str != 'string') {
        return 'Invalid String'
    }
    return [...str].reverse().join('')
}

console.log(reverse('Hi My name is Gaurav'));
console.log(reverse2('Hi My name is Gaurav'));
console.log(reverse3('Hi My name is Gaurav'));