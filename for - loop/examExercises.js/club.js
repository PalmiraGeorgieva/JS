function club(input) {
    let index = 0;
    let desiredWin = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let profit = 0;

    while(command !== "Party!") {
        let cocktail = command;
        let countCocktails = Number(input[index]);
        index++;
        price = cocktail.length * countCocktails
        if (price % 2 !== 0) {
            price *= 0.75
        }
        profit += price

        if (profit >= desiredWin) {
            console.log(`Target acquired.`)
            break;
        }

        command = input[index];
        index++;
        if(command === "Party!") {
        console.log(`We need ${(desiredWin - profit).toFixed(2)} leva more.`);
        break
        }
    }
    console.log(`Club income - ${profit.toFixed(2)} leva.`)
}
club((["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"]))