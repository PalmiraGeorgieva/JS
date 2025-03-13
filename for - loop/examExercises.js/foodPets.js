function foodPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let food = Number(input[index]);
    index++;
    let biscuits = 0
    let sumTotal = 0
    let sumDogFood = 0;
    let sumCatFood = 0

    for (let i = 1; i <= days; i++) {
        let dogFood = Number(input[index]);
        index++
        let catFood = Number(input[index]);
        index++;
        let sumFood = dogFood + catFood;

        sumTotal += sumFood
        sumDogFood += dogFood;
        sumCatFood += catFood

        if (i % 3 === 0) {
            biscuits += sumFood * 0.10
        }

    }
    let percentEatenFood = sumTotal / food * 100;
    let percentDogFood = sumDogFood / sumTotal * 100;
    let percentCatFood = sumCatFood / sumTotal * 100;
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`)
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`)
    console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`)
    console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`)
    

}
foodPets((["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]))