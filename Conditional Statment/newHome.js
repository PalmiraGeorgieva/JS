/*⦁	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
⦁	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
⦁	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
⦁	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
⦁	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
 */

function newHome(flower, countFlowers, budget) {
    let priceFlower = 0;

    switch(flower) {
        case "Roses":
            priceFlower = countFlowers * 5;
            if (countFlowers > 80) {
                priceFlower *= 0.90;
            }
            break;
        case "Dahlias":
            priceFlower = countFlowers * 3.80;
            if (countFlowers > 90) {
                priceFlower *= 0.85;
            }
            break;
        case "Tulips":
            priceFlower = countFlowers * 2.80;
            if (countFlowers > 80) {
                priceFlower *= 0.85;
            }
            break;
        case "Narcissus":
            priceFlower = countFlowers * 3;
            if (countFlowers < 120) {
                priceFlower = priceFlower + (priceFlower * 0.15);
            }
            break;
        case "Gladiolus":

            priceFlower = countFlowers * 2.50;
            if (countFlowers < 80){
            priceFlower = priceFlower + (priceFlower * 0.20);
            }
            break;    

    }
    if (budget >= priceFlower) {
        let leftSum = budget - priceFlower;
        console.log(`Hey, you have a great garden with ${countFlowers} ${flower} and ${leftSum.toFixed(2)} leva left.`)
    } else {
        let neededSum = priceFlower - budget;
        console.log(`Not enough money, you need ${neededSum.toFixed(2)} leva more.`)
    }
}
newHome("Narcissus",
119,
360
)