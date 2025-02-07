function cleverLili(age, washingmashinePrice, pricePerToy) {
    let moneySaved = 0;
    let moneyGiven = 10;
    for (let birthday = 1; birthday <= age; birthday++) {
        if (birthday % 2 == 0) {
            moneySaved += moneyGiven -1;
            moneyGiven += 10;
        } else {
            moneySaved += pricePerToy;
        }
    }
    if (moneySaved >= washingmashinePrice) {
        let moneyLeft = moneySaved - washingmashinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washingmashinePrice - moneySaved;
        console.log(`No! ${moneyNeeded.toFixed(2)}`)
    }

}
cleverLili(10,
    170.00,
    6)