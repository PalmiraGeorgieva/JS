function foodForPets(input) {
    let countDays = Number(input[0]);
    let index = 1;
    let totalQntFood = Number(input[index]);
    index++;
    let bisquits = 0;
    let totalEatenFood = 0;
    let dog = 0;
    let cat = 0;
    let totalEatenBisquits = 0
    let totalFood = 0
    for (let i = 0; i < countDays; i++) {
        let qntEatenDogFood = Number(input[index]);
        index++;
        let qntEatenCatFood = Number(input[index]);
        index++;
        totalFood = qntEatenCatFood + qntEatenDogFood
        dog += qntEatenDogFood;
        cat += qntEatenCatFood;
        totalEatenFood = dog + cat;
        if ((i + 1) % 3 === 0){
            bisquits = totalFood * 0.10;
            totalEatenBisquits += bisquits
        } 
        

    }
    let percentEatenFood = totalEatenFood / totalQntFood * 100
    let percentDogFood = dog / totalEatenFood * 100;
    let percentCatFood = cat / totalEatenFood * 100;
    console.log(`Total eaten biscuits: ${Math.round(totalEatenBisquits)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentCatFood.toFixed(2)}% eaten from the cat.`);

}
foodForPets((["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]))