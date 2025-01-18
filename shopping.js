function shopping(budgetPeter, countVideoCards, countProcessor, countRam) {
    let priceVideoCards = countVideoCards * 250; //
    let priceProcessors = priceVideoCards * 0.35;
    let sumProcessors = countProcessor * priceProcessors;
    let priceRam = priceVideoCards * 0.10;
    let sumRam = countRam * priceRam;
    let totalSum = priceVideoCards + sumProcessors + sumRam;
    let discountSum = 0;
    if (countVideoCards >= countProcessor) {
        discountSum = totalSum * (15/100);
    }

    let finalSum = totalSum - discountSum;

    if (finalSum <= budgetPeter) {
        let leftSum = budgetPeter - finalSum;
        console.log(`You have ${leftSum.toFixed(2)} leva left!`)
    } else {
        let neededSum = finalSum - budgetPeter;
        console.log(`Not enough money! You need ${neededSum.toFixed(2)} leva more!`)
    }

}
shopping(900,
    2,
    1,
    3
)