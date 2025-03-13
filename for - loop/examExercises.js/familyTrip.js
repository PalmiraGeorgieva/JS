function familyTrip(budget, countOvernights, priceOvernight, percentCosts) {
   
    if (countOvernights > 7) {
        priceOvernight *= 0.95;
    } 

    let priceAfterDiscount = countOvernights * priceOvernight;
    let percentBudget = budget * (percentCosts/100);
    let finalPrice = priceAfterDiscount + percentBudget;

    if (finalPrice <= budget) {
        let leftMoney = budget - finalPrice;
        console.log(`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`)
    } else {
        let neededMoney = finalPrice - budget;
        console.log(`${neededMoney.toFixed(2)} leva needed.`)
    }

}
familyTrip(500,
    7,
    66,
    15)