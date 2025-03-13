function traveling(input) {
    let index = 0;
    let destination = input[index]
    index++;

    while (destination !== "End") {

        let excursionPrice = Number(input[index]) 
        index++;
        let neededMoney = 0;
    

        while (neededMoney < excursionPrice) {
           let currentMoney = Number(input[index])
           index++;
           neededMoney += currentMoney
           

        }
        console.log(`Going to ${destination}!`)
        destination = input[index];
        index++;
        
    }
    
}
traveling((["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
    )