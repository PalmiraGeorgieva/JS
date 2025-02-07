function pets(countDays, leftFoodKg, dogFoodKg, catFoodKg, tortoiseFoodKg) {
      let dogNeededFood = countDays * dogFoodKg;
      let catNeedFood = countDays * catFoodKg;
      let tortoiseNeedFood = countDays * tortoiseFoodKg;
      let tortoiseFood = tortoiseNeedFood / 1000;
      let totalFood = dogNeededFood + catNeedFood + tortoiseFood;

      if (totalFood <= leftFoodKg) {
        let leftFood = leftFoodKg - totalFood;
        console.log(`${Math.floor(leftFood)} kilos of food left.`)

      } else {
        let neededFood = totalFood - leftFoodKg;
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`)
      }
}
pets(5,
    10,
    2.1,
    0.8,
    321)