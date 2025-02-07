function smallShop(product, town, quantity) {
    switch(town) {
        case "Sofia":
            if (product === "coffee") {
                money = 0.50 * quantity;
            } else if (product === "water") {
                money = 0.80 * quantity;
            } else if (product === "beer") {
                money = 1.20 * quantity;
            } else if (product === "sweets") {
                money = 1.45 * quantity;
            } else {
                money = 1.60 * quantity;
            }

          break;
        case "Plovdiv":
            if (product === "coffee") {
                money = 0.40 * quantity;
            } else if (product === "water") {
                money = 0.70 * quantity;
            } else if (product === "beer") {
                money = 1.15 * quantity;
            } else if (product === "sweets") {
                money = 1.30 * quantity;
            } else {
                money = 1.50 * quantity;
            }
            break;
        case "Varna":
            if (product === "coffee") {
                money = 0.45 * quantity;
            } else if (product === "water") {
                money = 0.70 * quantity;
            } else if (product === "beer") {
                money = 1.10 * quantity;
            } else if (product === "sweets") {
                money = 1.35 * quantity;
            } else {
                money = 1.55 * quantity;
            }
            break;
    }
    console.log(money);
}
smallShop("peanuts",
"Plovdiv",
1)
