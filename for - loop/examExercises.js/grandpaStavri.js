function grandpaStavri(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let totalRakia = 0;
    let totalDegrees = 0

    for (let i = 1; i <= days; i++) {
        let qntRakia = Number(input[index]);
        index++;
        let degreesDrink = Number(input[index]);
        index++;
        totalRakia += qntRakia;
        totalDegrees += qntRakia * degreesDrink 

    
    }
    let avgDegrees = totalDegrees / totalRakia
     console.log(`Liter: ${totalRakia.toFixed(2)}`);
     console.log(`Degrees: ${avgDegrees.toFixed(2)}`);

    if (avgDegrees < 38 ) {
        console.log(`Not good, you should baking!`)
    } else if (avgDegrees >= 38 && avgDegrees < 42) {
        console.log(`Super!`);
    } else {
        console.log(`Dilution with distilled water!`)
    }

    
}
grandpaStavri((["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
    )