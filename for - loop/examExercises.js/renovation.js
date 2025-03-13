/*Височина на стената - цяло число [0… 100]
Ширина на стената - цяло число [0… 100]
Процент от общата площ на стените, който няма да бъде боядисан - цяло число [5… 95]
На следващите редове до получаване на командата "Tired!" или докато не бъдат боядисани всички стени, се чете по едно число:
Литри боя – цяло число [0…100]:
Забележка: Площта за боядисване да бъде закръглена нагоре до най-близкото цяло число.
 */
function renovation(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let totalArea = height * width * 4;
    let percentNotPainted = Number(input[2]);
    let percentForPaint = totalArea - Math.floor((totalArea * (percentNotPainted / 100)))
    let index = 3;
    let command = input[index];
    index++;
    

    while (command !== "Tired") {
        let litrePaint = Number(command);
        percentForPaint -= litrePaint
        
        if(percentForPaint < 0) {
            console.log(`All walls are painted and you have ${Math.abs(percentForPaint)} l paint left!`);
            break;

        } 
        if (percentForPaint === 0) {
            console.log(`All walls are painted! Great job, Pesho!`)
            break;
        }


        command = input[index]
        index++;

        if (command === "Tired!") {
            console.log(`${percentForPaint} quadratic m left.`)
            break;
        }
    }
}
renovation((["2",
    "3",
    "25",
    "6",
    "7",
    "8"]))