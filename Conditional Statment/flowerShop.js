/*Магнолии – 3.25 лева
Зюмбюли – 4 лева
Рози – 3.50 лева
Кактуси – 8 лева
От общата сума, Мария трябва да плати 5% данъци.
 */

function flowerShop(countMagnolia, countHyacinth, countRoses, countCactus, priceGift) {
      let priceMagnolia = countMagnolia * 3.25;
      let priceHyacinth = countHyacinth * 4;
      let priceRoses = countRoses * 3.50;
      let priceCactus = countCactus * 8;
      let totalPrice = priceMagnolia + priceHyacinth + priceRoses + priceCactus;
      let priceWithTax = totalPrice * 0.95;

      if (priceWithTax >= priceGift) {
        let leftMoney = priceWithTax - priceGift;
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);
      } else {
        let neededMoney = priceGift - priceWithTax;
        console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.`);
      }
}
flowerShop(15,
    7,
    5,
    10,
    100)