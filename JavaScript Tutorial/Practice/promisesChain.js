function createOrder() {
    return new Promise((resolve, reject) => {
        if (!validateCart()) {
            reject(new Error("Cart is not valid!"))
        }
        const orderId = "123456"
        if (validateCart()) {
            console.log("Order Sucessfully Created!");
            resolve(orderId)
        }
    })
}
function validateCart() {
    return false;
}
function procedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId === '') {
            reject(new Error("Invalid orderId in validateCart"))
        }
        else {
            console.log(orderId);
            console.log("Payment Sucessfully Done!");
            resolve(orderId)
        }
    })
}
function showOrderInfo(orderId) {
    const personInfo = {
        Name: "Gaurav",
        education: "B-Tech",
        jobRole: "SDET",
        age: 34,
        Gender: "Male",
        orderId: "123456"
    }
    return new Promise((resolve, reject) => {
        if (personInfo.orderId !== orderId) {
            reject(new Error("Invalid orderId in showOrderInfo"))
        }
        else {
            console.log(orderId);
            console.log("Payment Sucessfully Done!");
            resolve(personInfo)
        }
    })
}

function updateWallet(personInfo) {
    return new Promise((resolve, reject) => {
        console.log("Wallet Sucessfully Updated!");
        resolve(personInfo)
    })
}

createOrder()
    .then((orderId) => procedToPayment(orderId) )
    .then((orderId) => showOrderInfo(orderId))
    .then((personInfo) => updateWallet(personInfo))
    .then((personInfo) => console.log(personInfo))
    .catch((err) => console.log(err.message))
