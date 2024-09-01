function createOrder(callback) {
    callback()

    setTimeout(() => {
        console.log("Order Sucessfully Created!\n");
    }, 2000)
}
function procedToPayment(callback) {
    setTimeout(() => {
        callback()
    }, 3000)

    setTimeout(() => {
        console.log("Payment Sucessfully Done!\n");
    }, 6000)

}
function updateWallet(callback) {
    setTimeout(() => {
        callback()
    }, 6500)

    setTimeout(() => {
        console.log("Wallet Sucessfully Updated!\n");
    }, 9500)

}

const updateWallet = () => {
    createOrder()
    procedToPayment()
}
updateWallet
updateWallet(
    function () {
        console.log("Updating Wallet Please wait....");
    }, procedToPayment(
        function () {
            console.log("Processing Payment Please wait....");
        }, createOrder(
            function () {
                console.log("Creating Order Please wait....");
            })))
