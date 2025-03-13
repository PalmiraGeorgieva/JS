/*1 грам мазнини = 9 калории
1 грам протеини = 4 калории
1 грам въглехидрати = 4 калории
 */
function catDiet(percentFat, percentProtein, percentCarb, totalCal, percentWater) {
    let totalFat = ((percentFat / 100) * totalCal) / 9
    let totalProtein = ((percentProtein / 100) * totalCal) / 4;
    let totalCarb = ((percentCarb / 100) * totalCal) / 4;
    let weightCat = totalFat + totalProtein + totalCarb;
    let calsPerKg = totalCal / weightCat
    let left = 100 - percentWater
    let calsInFood = (left / 100) * calsPerKg


    console.log(`${calsInFood.toFixed(4)}`)

}
catDiet(60,
    25,
    15,
    2500,
    60)