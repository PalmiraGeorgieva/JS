function trekkingMania(input) {
    let index = 0
    let countGroups = Number(input[index]);
    index++
    let totalPeople = 0;
    let musala = 0
    let kilimandzaro = 0;
    let everest = 0
    let montblan = 0
    let k2 = 0
    for (let i = 0; i < countGroups; i++){
        let countPeopleGroup = Number(input[index]);
        index++
        totalPeople += countPeopleGroup;

        if (countPeopleGroup <= 5) {
            musala += countPeopleGroup;
        } else if (countPeopleGroup >= 6 && countPeopleGroup <= 12) {
             montblan += countPeopleGroup;
        } else if (countPeopleGroup >= 13 && countPeopleGroup <= 25) {
            kilimandzaro += countPeopleGroup;
        } else if (countPeopleGroup >= 26 && countPeopleGroup <= 40) {
            k2 += countPeopleGroup
        } else {
           everest += countPeopleGroup;
        } 
    }
    let percentMusala = (musala / totalPeople) * 100;
    let percentMontbalan = (montblan / totalPeople) * 100;
    let percentKilimandzaro = (kilimandzaro / totalPeople) * 100;
    let percentK2 = (k2 / totalPeople) * 100;
    let percentEverest = (everest / totalPeople) * 100

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMontbalan.toFixed(2)}%`);
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