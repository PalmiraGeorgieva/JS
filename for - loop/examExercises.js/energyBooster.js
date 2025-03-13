function energyBooster(fruit, sizeSet, countSet) {
    let price = 0;
    switch(fruit) {
        case "Watermelon":
            if (sizeSet === "small") {
                price = 56 * 2

            } else if (sizeSet === "big")
                price = 28.70 * 5
            break;
        case "Mango":
            if (sizeSet === "small") {
                price = 36.66 * 2

            } else if (sizeSet === "big")
                price = 19.60 * 5
            break;
        case "Pineapple":
            if (sizeSet === "small") {
                price = 42.10 * 2

            } else if (sizeSet === "big")
                price = 24.80 * 5
            break;
        case "Raspberry":
            if (sizeSet === "small") {
                price = 20 * 2

            } else if (sizeSet === "big")
                price = 15.20 * 5
            break;            
    }
    let totalPriceSet = price * countSet;
    let discount = 0;
    if (totalPriceSet >= 400 && totalPriceSet<= 1000) {
        discount = totalPriceSet * 0.15
    } else if (totalPriceSet > 1000) {
        discount = totalPriceSet * 0.50
    }
    let finalPriceSet = totalPriceSet - discount;
    console.log(`${finalPriceSet.toFixed(2)} lv.`)

}
energyBooster("Watermelon",
    "big",
    4
    )