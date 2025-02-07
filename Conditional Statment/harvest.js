function harvest(areaVineyard, grapePerMeter, neededLitreVine, countWorkers) {
    let totalGrape = areaVineyard * grapePerMeter;
    let vine = 0.40 * totalGrape / 2.5;
    if (vine >= neededLitreVine) {
        let leftLiters = vine - neededLitreVine;
        let literPerPerson = leftLiters / countWorkers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(vine)} liters.`);
        console.log(`${Math.ceil(leftLiters)} liters left -> ${Math.ceil(literPerPerson)} liters per person.`);
    } else {
        let neededVine = neededLitreVine - vine;
        console.log(`It will be a tough winter! More ${Math.floor(neededVine)} liters wine needed.`)
    }

}
harvest(1020,
    1.5,
    425,
    4)