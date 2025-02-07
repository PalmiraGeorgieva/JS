function vetParking(days, hours) {
    let price = 0;
    let totalPrice = 0
    for (let i = 1; i <= days; i++){
        let dayTax = 0
        for (let j = 1; j <= hours; j++){
            if (i % 2 === 0 && j % 2 !== 0) {
                price = 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                price = 1.25;
            } else {
                price = 1
            }
            dayTax += price
            totalPrice += price
            
            
        }
        console.log(`Day: ${i} - ${dayTax.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalPrice.toFixed(2)} leva`)
}
vetParking(2, 5)