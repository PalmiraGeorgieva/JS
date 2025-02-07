/* От 0 до 9  20 % от числото
От 10 до 19  30 % от числото
От 20 до 29  40 % от числото
От 30 до 39  50 точки
От 40 до 50  100 точки
Невалидно число  резултата се дели на 2
*/
function gameOfIntervals(input) {
    let index = 0;
    let countPeople = Number(input[index]);
    index++;
    let countNum0To9 = 0; // 20% 
    let countNumTo19 = 0; // 30%
    let countNumTo29 = 0; // 40%
    let countNumTo39 = 0; // + 50
    let countNumTo50 = 0; // + 100
    let invalidNum = 0; // Invalid and result / 2
    let startResult = 0;
   

    for (let i = 0; i < countPeople; i++) {
        let numbers = Number(input[index]);
        index++
       

        if (numbers >= 0 && numbers <= 9){
            countNum0To9++
            startResult += numbers * 0.20;
            
        } else if (numbers >= 10 && numbers <= 19) {
            countNumTo19++
            startResult += numbers * 0.30;

        } else if (numbers >= 20 && numbers <= 29) {
            countNumTo29++
            startResult += numbers * 0.40;
        } else if (numbers >= 30 && numbers <= 39) {
            countNumTo39++
            startResult += 50;

        } else if (numbers >= 40 && numbers <= 50) {
            countNumTo50++
            startResult += 100;
        } else {
            invalidNum++
            startResult = startResult / 2;
        }
    }
    let percent0To9 = countNum0To9 / countPeople * 100;
    let percent10To19 = countNumTo19 / countPeople * 100;
    let percent20To29 = countNumTo29 / countPeople * 100;
    let percent30To39 = countNumTo39 / countPeople * 100;
    let percent40To50 = countNumTo50 / countPeople * 100;
    let percentInvalidNum = invalidNum / countPeople * 100;

    console.log(`${startResult.toFixed(2)}`);
    console.log(`From 0 to 9: ${percent0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percent10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percent20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percent30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percent40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentInvalidNum.toFixed(2)}%`);
     
}
gameOfIntervals((["10",
    "43",
    "57",
    "-12",
    "23",
    "12",
    "0",
    "50",
    "40",
    "30",
    "20"]))