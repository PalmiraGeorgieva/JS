function schoolMaterials(penCount, markerCount, detergent, percent) {
let penPrice = penCount * 5.80;
let markerPrice = markerCount * 7.20;
let detergentPrice = detergent * 1.20;
let priceTotal = penPrice + markerPrice + detergentPrice;
let dicountPrice = priceTotal - (priceTotal *(percent / 100))
console.log(dicountPrice);
}
schoolMaterials();