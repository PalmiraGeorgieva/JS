function painting(countNylon, countPaint, thinner, hours) {
let priceNylon = (countNylon + 2) * 1.50;
let pricePaint = (countPaint + (countPaint * (10 / 100))) * 14.50;
let priceThinner = thinner * 5.00;
let bagPrice = 0.40;
let materialPrice = priceNylon + pricePaint + priceThinner + bagPrice;
let priceMaster = (materialPrice * (30 / 100)) * hours
let finalPrice = materialPrice + priceMaster;
console.log(finalPrice);
}
painting(10, 11, 4, 8);