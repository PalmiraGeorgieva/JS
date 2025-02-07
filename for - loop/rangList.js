function rangList(input) {
    let countTournament = Number(input[0]);
    let startPoints = Number(input[1]);
    let pointsFromTournament = 0
    let finalPoints = 0
    let winner = 0
    
    for (let i = 2; i <= 2 + countTournament; i++) {
        let levelTournament = input[i];
        

        if (levelTournament === "W") {
            pointsFromTournament += 2000;
            winner++
        } else if (levelTournament === "F") {
            pointsFromTournament += 1200;
        } else if (levelTournament === "SF") {
            pointsFromTournament += 720;
        }
        
        
    }
    finalPoints = startPoints + pointsFromTournament;
    let averagePoints = pointsFromTournament/ countTournament
    let percentWin = (winner / countTournament) * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWin.toFixed(2)}%`);
    
}
rangList((["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]))