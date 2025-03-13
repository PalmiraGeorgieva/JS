function coffeeMachine(drink, sugar, countDrinks) {
    let price = 0

    switch(drink) {
        case "Espresso":
            if (sugar === "Without"){
                price = (countDrinks * 0.90) * 0.65

            } else if(sugar === "Normal"){
                price = countDrinks * 1

            } else {
                price = countDrinks * 1.20
            }
            break;
        case "Cappuccino":
            if (sugar === "Without"){
                price = (countDrinks * 1) * 0.65

            } else if(sugar === "Normal"){
                price = countDrinks * 1.20

            } else {
                price = countDrinks * 1.60
            }
            break;
        case "Tea":
            if (sugar === "Without"){
                price = (countDrinks * 0.50) * 0.65

            } else if(sugar === "Normal"){
                price = countDrinks * 0.60

            } else {
                price = countDrinks * 0.70
            }
            break;        

    }
    if (drink === "Espresso" && countDrinks >= 5) {
        price *= 0.75;

    }
    
    if (price > 15) {
        price *= 0.80;

    }
    console.log(`You bought ${countDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);

}
coffeeMachine("Espresso",
    "Without",
    10)