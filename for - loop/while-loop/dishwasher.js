/*, дали дадено закупено количество бутилки от препарат за съдомиялна е достатъчно,
за да измие определено количество съдове. Знае се, че всяка бутилка съдържа 750 мл.
препарат, за 1 чиния са нужни 5 мл., а за тенджера 15 мл. 
Приемете, че на всяко трето зареждане със съдове, 
съдомиялната се пълни само с тенджери, а останалите пъти с чинии. */
function dishwasher(input) {
    let index = 0;
    let countBottles = Number(input[index]);
    let bottels = countBottles * 750;
    index++;
    let command = input[index];
    index++;
    let pots = 0;
    let plates = 0;
    let counter = 0;
    let vero = 0;

    while(command !== "End") {
        let dishes = Number(command);
        counter++;
        
        if (counter % 3 == 0) {
            pots += dishes;
            vero += dishes * 15;
        } else {
            plates += dishes;
            vero += dishes * 5;
        }

        if (vero > bottels) {
            break;
        }
        command = input[index];
        index++;

    }
    let diff = Math.abs(vero - bottels);
    if (vero <= bottels) {
        console.log(`Detergent was enough!`);
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${diff} ml.`)
    } else {
        console.log(`Not enough detergent, ${diff} ml. more necessary!`)
    }
}
dishwasher((["2 ",
    "53",
    "65",
    "55",
    "End"])
    )