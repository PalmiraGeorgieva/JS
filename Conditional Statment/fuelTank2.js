/*Бензин – 2.22 лева за един литър, 
Дизел – 2.33 лева за един литър
Газ – 0.93 лева за литър
Ако водача има карта за отстъпки,  той се възползва от следните намаления за литър гориво: 
18 ст. за литър бензин, 
12 ст. за литър дизел и 8 ст. за литър газ. 
Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена,
 при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.
 */
function fuelTank2(typeFuel, fuelQuantity, clubCard) {
    let price = 0;
    let totalPrice = 0;
    let finalPrice = 0;

    if (typeFuel === "Gasoline" ) {
        if (clubCard === "Yes") {
            price = 2.22 - 0.18;
        } else {
            price = 2.22;
        }
        
    } else if (typeFuel === "Diesel") {
        if (clubCard === "Yes") {
            price = 2.33 - 0.12;
        } else {
            price = 2.33;
        }
    } else if (typeFuel === "Gas") {
        if (clubCard === "Yes") {
            price = 0.93 - 0.08;
        } else {
            price = 0.93;
        }
    }

    totalPrice = fuelQuantity * price;

    if (fuelQuantity >= 20 && fuelQuantity <= 25) {
        finalPrice = totalPrice * 0.92;
        
    } else if (fuelQuantity > 25) {
        finalPrice = totalPrice * 0.90;
        
    } else {
        finalPrice = totalPrice;
    }
    
    console.log(`${finalPrice.toFixed(2)} lv.`);
    
   
}
fuelTank2("Diesel",
    19,
    "No")