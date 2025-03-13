/*W - Отборът е победител и получава 3 точки
D - Срещата е завършила без победител и отборът получава 1 точка
L - Отборът е загубил срещата и не получава точки
 */
function footballTournament(input) {
    let index = 0;
    let nameFootballTeam = input[index];
    index++;
    let countGames = Number(input[index]);
    index++;
    let w = 0;
    let d = 0;
    let l = 0;
    let points = 0
    let totalPoints = 0;
    

    for (let i = 0; i < countGames; i++) {
        let resulPlayedGames = input[index];
        index++
        if(resulPlayedGames === "W") {
            w++;
            points = 3

        } else if (resulPlayedGames === "D") {
            d++;
            points = 1
        } else {
            l++;
            points = 0
        }
        totalPoints = (w * 3) + (d * 1)
        
    
    }
    if (countGames == 0) {
        console.log(`${nameFootballTeam} hasn't played any games during this season.`)
    } else if (countGames >= 1) {
        console.log(`${nameFootballTeam} has won ${totalPoints} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${(w / countGames * 100).toFixed(2)}%`);
    }
   
}
footballTournament((["Liverpool",
    "10",
    "W",
    "D",
    "D",
    "W",
    "L",
    "W",
    "D",
    "D",
    "W",
    "W"]))