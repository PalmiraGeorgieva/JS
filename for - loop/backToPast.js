function backToPast(inheritedMoney, yearToLive) {
    let moneyForSpend = 12000;
    let spendMoney = 0;
    let age = 18;
    for (let year = 1800; year <= yearToLive; year++ ) {
        if (year % 2 === 0) {
            spendMoney += moneyForSpend;
            
        } else {
    
            spendMoney += moneyForSpend + age  * 50
            
        }
        age++;
        
    }
    if (inheritedMoney >= spendMoney) {
        let leftMoney =  inheritedMoney - spendMoney;
        console.log(`Yes! He will live a carefree life and will have ${leftMoney.toFixed(2)} dollars left.`)
    } else {
        let neededMoney = spendMoney - inheritedMoney;
        console.log(`He will need ${neededMoney.toFixed(2)} dollars to survive.`)
    }
}
backToPast(50000,
    1802)