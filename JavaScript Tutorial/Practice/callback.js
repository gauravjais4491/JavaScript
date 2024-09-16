function createOrder(callback) {
    callback()

    setTimeout(() => {
        console.log("Order Successfully Created!\n");
    }, 2000)
}
function proceedToPayment(callback) {
    setTimeout(() => {
        callback()
    }, 3000)

    setTimeout(() => {
        console.log("Payment Successfully Done!\n");
    }, 6000)

}
function updateWallet(callback) {
    setTimeout(() => {
        callback()
    }, 6500)

    setTimeout(() => {
        console.log("Wallet Successfully Updated!\n");
    }, 9500)

}

const updateWallet = () => {
    createOrder()
    proceedToPayment()
}
updateWallet
updateWallet(
    function () {
        console.log("Updating Wallet Please wait....");
    }, proceedToPayment(
        function () {
            console.log("Processing Payment Please wait....");
        }, createOrder(
            function () {
                console.log("Creating Order Please wait....");
            })))
