/* ⦁	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
⦁	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
⦁	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
⦁	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
 */
function equipment(yearTax) {
    let priceShoes = yearTax -(yearTax * 0.40);
    let priceEquip = priceShoes - (priceShoes * 0.20);
    priceBall = 0.25 * priceEquip;
    priceAccessoir = 0.20 * priceBall;
    totalPriceEquip = yearTax + priceShoes + priceEquip + priceBall + priceAccessoir;
    console.log(totalPriceEquip);
}
equipment(365);