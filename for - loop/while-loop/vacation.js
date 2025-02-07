function vacation(input) {
    let index = 0;
    let neededMoneyVacation = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;
    let days = 0;
    let spendDays = 0;
    while (currentMoney < neededMoneyVacation) {
        let action = input[index];
        index++;
        let sumSaveSpend = Number(input[index]);
        index++;
        days++;

        if (action === "spend") {
            currentMoney -= sumSaveSpend;
            if (currentMoney < 0) {
                currentMoney = 0;
            }
            spendDays++;
        } else {
            currentMoney += sumSaveSpend
            spendDays = 0;

        }

        if (spendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            break;
        } 
       
    }
    if (currentMoney >= neededMoneyVacation) {
        console.log(`You saved the money for ${days} days.`);  
    }
    

}
vacation((["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]))