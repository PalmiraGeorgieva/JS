/*Цената на тон, за която се превозва товара е различна за всяко превозно средство:
До 3 тона – микробус (200 лева на тон)
От 4 до 11 тона – камион (175 лева на тон)
12 и повече тона – влак (120 лева на тон)
Вашата задача е да изчислите средната цена на тон превозен товар, както и процента на тоновете  превозвани с всяко превозно средство, спрямо общото тегло(в тонове) на всички товари.
 */

function logistics(input) {
    let countCargo = Number(input[0]);
    let totalCargo = 0;
    let microbus = 0;
    let truck = 0;
    let train = 0;

    for (let i = 1; i <= countCargo; i++) {
        let cargo = Number(input[i]);
        totalCargo += cargo;

        if (cargo <= 3) {
            microbus += cargo;
           
        } else if (cargo >= 4 && cargo <= 11) {
            truck += cargo;

        } else {
            train += cargo;
        }

    }
    let averageTon = (microbus * 200 + truck * 175 + train * 120) / totalCargo; 
    let percentMicrobus = (microbus / totalCargo) * 100;
    let percentTruck = (truck / totalCargo) * 100;
    let percentTrain = (train / totalCargo) * 100;
    console.log(`${averageTon.toFixed(2)}`);
    console.log(`${percentMicrobus.toFixed(2)}%`);
    console.log(`${percentTruck.toFixed(2)}%`);
    console.log(`${percentTrain.toFixed(2)}%`);

}
logistics((["4",
    "1",
    "5",
    "16",
    "3"])
    )