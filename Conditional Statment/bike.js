function bikeRace(juniorRiders, seniorRiders, route) {
    let juniorsPrice = 0;
    let seniorsPrice = 0;
    let totalCountRiders = juniorRiders + seniorRiders;

    switch(route) {
        case "trail":
            juniorsPrice = juniorRiders * 5.50;
            seniorsPrice = seniorRiders * 7;
            break;
        case "cross-country":
            juniorsPrice = juniorRiders * 8;
            seniorsPrice = seniorRiders * 9.50;
            if (totalCountRiders >= 50 && route == "cross-country") {
                juniorsPrice -= (juniorRiders * 8) * 0.25;
                seniorsPrice -= (seniorRiders * 9.50) * 0.25;
            } 
            break;
        case "downhill":
            juniorsPrice = juniorRiders * 12.25;
            seniorsPrice = seniorRiders * 13.75;
            break;
        case "road":
            juniorsPrice = juniorRiders * 20;
            seniorsPrice = seniorRiders * 21.50;
            break;
    }
    
    let totalSum = juniorsPrice + seniorsPrice;
    let expenses = totalSum * 0.05;
    let leftSum = totalSum - expenses;
    console.log(`${leftSum.toFixed(2)}`)
}
bikeRace(30,
    25,
    "cross-country")