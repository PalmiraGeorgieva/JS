function carToGo(budget, season) {
    let classCar = "";
    let priceCar = 0;
    let typeCar = "";
    switch(season){
        case "Summer":
            if (budget <= 100) {
                classCar = "Economy class";
                typeCar = "Cabrio";
                priceCar = budget * 0.35;

            } else if (budget > 100 && budget <= 500) {
                classCar = "Compact class";
                typeCar = "Cabrio";
                priceCar = budget * 0.45;
            } else {
                classCar = "Luxury class";
                typeCar = "Jeep";
                priceCar = budget * 0.90;
            }
            break;
        case "Winter":
            if (budget <= 100) {
                classCar = "Economy class";
                typeCar = "Jeep";
                priceCar = budget * 0.65;

            } else if (budget > 100 && budget <= 500) {
                classCar = "Compact class";
                typeCar = "Jeep";
                priceCar = budget * 0.80;
            } else {
                classCar = "Luxury class";
                typeCar = "Jeep";
                priceCar = budget * 0.90;
            }
            break;    
    }
    console.log(`${classCar}`);
    console.log(`${typeCar} - ${priceCar.toFixed(2)}`);
}
carToGo(450,
    "Summer")