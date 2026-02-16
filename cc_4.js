let products = [
    {
        name: "Iphone 17 Pro Max",
        category: "electronics",
        price: 1700,
        inventory: 3
    },
    {
        name: "Alo Sweatshirt",
        category: "apparel",
        price: 120,
        inventory: 2
    },
    {
        name: "cucumber",
        category: "groceries",
        price: 1,
        inventory: 34
    },
    {
        name: "dining room set",
        category: "household",
        price: 750,
        inventory: 4
    },
    {
        name: "lazy boy recliner",
        category: "household",
        price: 450,
        inventory: 6
    }
];

for (let product of products) {

    let discount = 0;

    switch (product.category) {
        case "electronics":
            discount = product.price * 0.20;
            break;

            case "apparel":
                discount = product.price * 0.15;
                break;

                case "groceries":
                    discount = product.price * 0.10;
                    break;

                    case "household":
                    discount = product.price * 0.10;
                    break; 

                    default:
                        discount = 0;
    }

    console.log(product.name + " discounted: " + discount);
}

let customerType = "student";
let extraDiscount = 0;

if (customerType == "student") {
    extraDiscount = 0.05;
} else if (customerType == "senior") {
    extraDiscount = 0.07;
} else {
    extraDiscount = 0;
}

console.log("Customer type:", customerType);
console.log("Extra discount:", extraDiscount);

for (let customer = 1; customer <= 3; customer++) {
    let cartTotal = 0;

    for (let product of products) {

        if (product.inventory > 0) {
            cartTotal = cartTotal + product.price;
            product.inventory = product.inventory - 1;
        }
    }
    console.log("Customer " + customer + " total:", cartTotal);
}    

let singleProduct = prodcuts[0];

for (let key in singleProduct) {
    console.log(key + ": " + singleProduct[key]);
}

for (let product of products) {
    for (let [key, value] of Object.entries(product)) {
        console.log(key + ": " + value)
    }
}
