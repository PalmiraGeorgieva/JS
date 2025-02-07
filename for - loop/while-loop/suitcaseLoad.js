/*Капацитетът на багажника – реално число в диапазона [100.0…6000.0]
След това до получаване на команда "End" или до запълване на багажника, се чете по един ред:
Обем на куфар – реално число в диапазона [100.0…6000.0]
 */
function suitcaseLoad(input) {
    let index = 0;
    let capacitySuitcase = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let countSuitcase = 0;
    let totalVolume = 0;
    

    while (command !== "End") {
        let volumeSuitcase = Number(command);
        totalVolume += volumeSuitcase;
        if (volumeSuitcase % 3 == 0) {
            volumeSuitcase *= 1.10

        }
        
        if(totalVolume >= capacitySuitcase) {
            console.log(`No more space!`);
            break;
        }

        countSuitcase++;
        command = input[index];
        index++;

    }
    if (command === "End") {
        console.log(`Congratulations! All suitcases are loaded!`)
    }

    console.log(`Statistic: ${countSuitcase} suitcases loaded.`)
}
suitcaseLoad((["550",
    "100",
    "252",
    "72",
    "End"]))