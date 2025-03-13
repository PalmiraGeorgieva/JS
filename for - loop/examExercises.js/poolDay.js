function poolDay(countPeople, taxEntrance, priceSunbed, priceUmbrella) {
    let totaltaxEntrance = countPeople * taxEntrance;
    let countSunbeds = Math.ceil(countPeople * 0.75);
    let totalPriceSunbeds = countSunbeds * priceSunbed;
    let countUmbrellas = Math.ceil(countPeople * 0.50);
    let totalPriceUmbrella = countUmbrellas * priceUmbrella;
    let finalPrice = totaltaxEntrance + totalPriceSunbeds + totalPriceUmbrella
    console.log(`${finalPrice.toFixed(2)} lv.`)
}
poolDay(21,
    5.50,
    4.40,
    6.20)
