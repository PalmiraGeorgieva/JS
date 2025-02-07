/*В празнични дни цените на всички цветя се увеличават с 15%. Предлагат се следните отстъпки:
⦁	За закупени повече от 7 лалета през пролетта – 5% от цената на целият букет.
⦁	За закупени 10 или повече рози през зимата – 10% от цената на целият букет.
⦁	За закупени повече от 20 цветя общо през всички сезони – 20% от цената на целият букет.
Отстъпките се правят по така написания ред и могат да се наслагват! Всички отстъпки важат след оскъпяването за празничен ден!
Цената за аранжиране на букета винаги е 2лв. Напишете програма, която изчислява цената за един букет.
 */
function flowerShop(countChrysanthemum, countRoses, countTulip, season, dayHoliday) {
    let priceChrysanthemum = 0;
    let priceRoses = 0;
    let priceTulip = 0;
    let countFlowers = countChrysanthemum + countRoses + countTulip;

    if (season === "Spring" || season === "Summer") {
        priceChrysanthemum = countChrysanthemum * 2.00;
        priceRoses = countRoses * 4.10;
        priceTulip = countTulip * 2.50;
    } else if (season === "Autumn" || season === "Winter") {
        priceChrysanthemum = countChrysanthemum * 3.75;
        priceRoses = countRoses * 4.50;
        priceTulip = countTulip * 4.15;
    }
    let totalPrice = priceChrysanthemum + priceRoses + priceTulip;

    if (dayHoliday === "Y") {
        totalPrice *= 1.15;

    } 
    
    if (countTulip >= 7 && season === "Spring") {
        totalPrice *= 0.95; 
    } 

    if (countRoses >= 10 && season === "Winter" ) {
        totalPrice *= 0.90;
    } 

    if (countFlowers >= 20) {
        totalPrice *= 0.80;
    } 

    let totalSum = totalPrice + 2;
    console.log(`${totalSum.toFixed(2)}`)

}
flowerShop(3,
    10,
    9,
    "Winter",
    "N")