function reportSystem(input) {
    let index = 0;
    let needeSum = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let cash = 0;
    let cashPayment = 0;
    let card = 0;
    let cardPayment = 0;
    let currentPayment = 0;
    let totalSum = 0;
    while (command !== "End") {
    
        let productPrice = Number(command);
        currentPayment++;
        if(currentPayment % 2 == 1) {
            if (productPrice > 100) {
                console.log(`Error in transaction!`);
            } else {
                cash++;
                cashPayment += productPrice;
                totalSum += productPrice;
                console.log(`Product sold!`);
            }
        } else if (currentPayment % 2 == 0) {
            if (productPrice < 100) {
                console.log(`Error in transaction!`);
            } else {
                card++;
                cardPayment += productPrice;
                totalSum += productPrice;
                console.log(`Product sold!`)
            }
        }
        if (totalSum >= needeSum) {
            break;
        }

        command = input[index];
        index++;
       
    }
    if (totalSum >= needeSum) {
        let averageCash = cashPayment / cash;
        let averageCard = cardPayment / card;
        console.log(`Average CS: ${averageCash.toFixed(2)}`);
        console.log(`Average CC: ${averageCard.toFixed(2)}`);
        
    } else {
        console.log(`Failed to collect required money for charity.`)
    }    
        
    
}
reportSystem((["600",
    "86",
    "150",
    "98",
    "227",
    "End"]))