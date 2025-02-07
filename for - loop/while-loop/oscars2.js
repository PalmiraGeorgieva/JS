function oscars(input) {
    let index = 0;
    let nameActor = input[index];
    index++;
    let pointsAcademy = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;
    
    
    for (let i = 0; i < n; i++) {
        let nameValuer = input[index];
        index++;
        let values = Number(input[index]);
        index++

        pointsAcademy += ((nameValuer.length * values) / 2)

        if (pointsAcademy >= 1250.5) {
            break;
        }

    }
    if (pointsAcademy >= 1250.5) {
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`)
    } else {
        let diffPoints = 1250.5 - pointsAcademy;
        console.log(`Sorry, ${nameActor} you need ${diffPoints.toFixed(1)} more!`);
    }
}
oscars((["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]))