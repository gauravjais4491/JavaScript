class Shopping_Cart {
    constructor() {
        this.products = [
            {
                "name": "Leather wallet",
                "unitPriceInRupees": 1100,
                "GSTInPercent": 18,
                "quantity": 1

            },
            {
                "name": "Umbrella",
                "unitPriceInRupees": 900,
                "GSTInPercent": 12,
                "quantity": 2
            },
            {
                "name": "Cigarette",
                "unitPriceInRupees": 200,
                "GSTInPercent": 28,
                "quantity": 3
            },
            {
                "name": "Honey",
                "unitPriceInRupees": 100,
                "GSTInPercent": 0,
                "quantity": 4
            },
            {
                "name": "Pen",
                "unitPriceInRupees": 1200,
                "GSTInPercent": 28,
                "quantity": 10
            }
        ]
        this.maxGst = 0;
    }
    isEligibleForDiscount() {

        for (const product of this.products) {
            if (product["unitPriceInRupees"] > 500) {
                this.getDiscountPrice(product);
            }
            else {
                let discountPrice = 0;
                this.getTotalAmountToBePaidToTheShopKeeper(product, discountPrice);
            }
        }
    }
    async getDiscountPrice(product) {
        let productName = []
        let discountPrice = (product["unitPriceInRupees"] * 5) / 100
        if (discountPrice > this.maxGst) {
            this.maxGst = discountPrice;
            productName = product["name"]
            this.getProductNameForWhichWePaidMaximumGst(productName)
        }
        await this.getTotalAmountToBePaidToTheShopKeeper(product, discountPrice)

    };

    getProductNameForWhichWePaidMaximumGst(productName) {
        console.log(`The Product Name for which we paid for the maximum Gst is ${productName}`)
    };

    async getTotalAmountToBePaidToTheShopKeeper(product, discountPrice) {
        let TotalAmountToBePaidToTheShopKeeper = product["unitPriceInRupees"] + discountPrice;
        console.log(`The Price for ${product.Name} is ${TotalAmountToBePaidToTheShopKeeper}`)
    }
}
const shoppingCart = new Shopping_Cart();
shoppingCart.isEligibleForDiscount();

