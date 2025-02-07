function oscars(input) {
    let nameActor = input[0];
    let points = Number(input[1]);
    let countValues = Number(input[2]);

    for (let i = 0; i < countValues; i++) {
        let nameValuer = input[3 + i * 2];
        let values = input[4 + i * 2];

        points += ((nameValuer.length * values) / 2)

        if (points > 1250.5) {
            break;
        }
    }
    if (points > 1250.5){
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`)

    }else{ 
        let neededPoints = 1250.5 - points;
        console.log(`Sorry, ${nameActor} you need ${neededPoints.toFixed(1)} more!`)
    }

   
}
oscars((["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"]))