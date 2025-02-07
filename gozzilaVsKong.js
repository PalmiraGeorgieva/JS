function gozzilaVsKong(budget, actorsCount, equipmentPriceActor) {
    let decor = budget * 0.1;
    let equipmentPrice = actorsCount * equipmentPriceActor
    if (actorsCount > 150) {
        equipmentPrice *= 0.9;  
    } 

    let totalSum = decor + equipmentPrice;

    if (totalSum > budget) {
        let neededMoney = totalSum - budget;
        console.log("Not enough money!")
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`)
    } else {
        let leftMoney = budget - totalSum;
        console.log("Action!");
        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`)
    }
}
gozzilaVsKong(20000,
    120,
    55.5
    );  