function deerOfSanta(days, leftFood, foodFirstDeer, foodSecondDeer, foodThirdDeer) {
    let firstDeer = days * foodFirstDeer;
    let secondDeer = days * foodSecondDeer;
    let thirdDeer = days * foodThirdDeer;
    let totalFood = firstDeer + secondDeer + thirdDeer;
    if  (leftFood >= totalFood) {
        let foodLeft = leftFood - totalFood;
        console.log(`${Math.floor(foodLeft)} kilos of food left.`)

    } else {
        let needeFood = totalFood - leftFood;
        console.log(`${Math.ceil(needeFood)} more kilos of food are needed.`)
    } 
}
deerOfSanta(2,
    10,
    1,
    1,
    2)