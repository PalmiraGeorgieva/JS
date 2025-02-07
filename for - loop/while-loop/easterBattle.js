/*Участват двама играчи
Всеки от тях започва с определен брой яйца
При получаване на команда "one" -> първият играч печели => яйцата на втория намаляват с едно 
При получаване на команда "two" -> вторият играч печели => яйцата на първия намаляват с едно
Играта приключва, ако някой от играчите остане без яйца или до получаване на команда "End"
 */
function easterBattle(input) {
    let index = 0;
    let countEggsFirst = Number(input[index]);
    index++;
    let countEggsSecond = Number(input[index]);
    index++;
    let playerOne = countEggsFirst;
    let playerTwo = countEggsSecond
    
    while (index < input.length) {
        let command = input[index];
        index++;
        if (command === "End") {
            console.log(`Player one has ${playerOne} eggs left.`);
            console.log(`Player two has ${playerTwo} eggs left.`);
            break;
        }
       
          
        if(command === "one") {
            playerTwo--;
        } else if (command === "two") {
            playerOne--;
        }


        if (playerOne === 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
            return;

        } else if (playerTwo === 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
            return;
        }
        
    }
    
    
     

}
easterBattle((["2",
    "6",
    "one",
    "two",
    "two"]))