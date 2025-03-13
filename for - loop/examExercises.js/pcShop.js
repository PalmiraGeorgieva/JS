/*Hearthstone
Fornite
Overwatch
Others
 */
function pcShop(input) {
    let index = 0;
    let countSoldGames = Number(input[index]);
    index++;
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for (let i = 0; i < countSoldGames; i++) {
        let nameGame = input[index];
        index++;
        if (nameGame === "Hearthstone") {
            hearthstone++;
        } else if (nameGame === "Fornite") {
            fornite++;
        }else if (nameGame === "Overwatch") {
            overwatch++;
        } else {
            others++;
        }
        
    }
    let percentHearthstone = hearthstone / countSoldGames * 100;
    let percentFornite = fornite / countSoldGames * 100;
    let percentOverwatch = overwatch / countSoldGames * 100;
    let percentOthers = others / countSoldGames * 100;
    console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOthers.toFixed(2)}%`);
}
pcShop((["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"]))