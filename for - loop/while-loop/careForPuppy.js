/*Закупеното количество храна за кученцето в килограми – цяло число в интервала [1 …100]
На всеки следващ ред до получаване на команда Adopted ще получавате колко грама изяжда кученцето 
на всяко хранене - цяло число в интервала [10 …1000]
 */
function careForPuppy(input) {
    let index = 0;
    let qntFood = Number(input[index]) * 1000;
    index++;
    let command = input[index];
    index++;
    let totalFood = 0;

    while(command !==  "Adopted") {
        let gramFood = Number(command)
        totalFood += gramFood;
        


        command = input[index];
        index++;
    }
    if (totalFood <= qntFood) {
        let leftFood = qntFood - totalFood;
        console.log(`Food is enough! Leftovers: ${leftFood} grams.`);
    } else {
        let neededFoot = totalFood - qntFood;
        console.log(`Food is not enough. You need ${neededFoot} grams more.`);
    }
}
careForPuppy((["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"]))