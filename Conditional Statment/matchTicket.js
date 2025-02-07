/*⦁	IP – 499.99 лева.
⦁	Normal – 249.99 лева
1 до 4 – 75% от бюджета.
⦁	От 5 до 9 – 60% от бюджета.
⦁	От 10 до 24 – 50% от бюджета.
⦁	От 25 до 49 – 40% от бюджета.
⦁	50 или повече – 25% от бюджета. */
function matchTicket(budget, category, countPeople) {
    let transportPrice = 0;
   
    if (countPeople >= 1 && countPeople <= 4) {
        transportPrice = budget * 0.75;
    
    } else if (countPeople >= 5 && countPeople <= 9) {
        transportPrice = budget * 0.60;

    } else if (countPeople >= 10 && countPeople <= 24) {
        transportPrice = budget * 0.50;
        

    } else if (countPeople >= 25 && countPeople <= 49) {
        transportPrice = budget * 0.40;
        
    } else if (countPeople >= 50) {
        transportPrice = budget * 0.25;
        
    }

    let leftSum = budget - transportPrice;
    let price = 0;
        
    switch(category) {
        case "VIP":
            price = countPeople * 499.99;
            break;

        case "Normal":
            price = countPeople * 249.99;
            break; 

    }

    if (leftSum >= price) {
        let sumDiff = leftSum - price;
        console.log(`Yes! You have ${sumDiff.toFixed(2)} leva left.`);
    } else {
        let neededSum = price - leftSum;
        console.log(`Not enough money! You need ${neededSum.toFixed(2)} leva.`);
    }

}
matchTicket(30000,
    "VIP",
    49)