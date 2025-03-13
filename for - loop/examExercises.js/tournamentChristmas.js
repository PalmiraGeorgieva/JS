function tournamentChristmas(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let totalWinDays = 0;
    let totalMoney = 0;

    for (let i = 0; i < days; i++) {
        let winCount = 0;
        let loseCount = 0;
        let currentMoney = 0;

        while (input[index] !== "Finish") {
            let game = input[index++];
            let result = input[index++];

            if (result === "win") {
                winCount++;
                currentMoney += 20;
            } else {
                loseCount++;
            }
        }

        index++; 

        if (winCount > loseCount) {
            currentMoney *= 1.20;
            totalWinDays++;
        }

        totalMoney += currentMoney;
    }

    if (totalWinDays > days / 2) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
tournamentChristmas((["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]))