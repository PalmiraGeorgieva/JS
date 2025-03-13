/*Група до 5 човека– Мусала
Група от 6 до 12 – Монблан
Група от 13 до 25 – Килиманджаро
Група от 26 до 40 – К2
Група от 41 или повече – Еверест
 */
function trekkingMania(input) {
    let index = 0;
    let countGroups = Number(input[index]);
    index++;
    let musala = 0;
    let monblan = 0;
    let kilimindzaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0
    for (let i = 0; i < countGroups; i++) {
        let countPeople = Number(input[index]);
        index++;
        totalPeople += countPeople;

        if (countPeople <= 5) {
            musala += countPeople

        } else if (countPeople >= 6 && countPeople <= 12) {
            monblan += countPeople;
        } else if (countPeople >= 13 && countPeople <= 25) {
            kilimindzaro += countPeople;
        } else if (countPeople >= 26 && countPeople <= 40) {
             k2 += countPeople;
        } else {
            everest += countPeople;
        }
    }
    let percentMusala = musala / totalPeople * 100;
    let percentMonblan = monblan / totalPeople * 100;
    let percentKilimandzaro = kilimindzaro / totalPeople * 100;
    let percentK2 = k2 / totalPeople * 100;
    let percentEverest = everest / totalPeople * 100;
    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentKilimandzaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);

    
}
trekkingMania((["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]))