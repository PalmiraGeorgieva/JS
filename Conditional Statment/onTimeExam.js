function onTimeExam(hourExam, minutesExam, hourArrive, minArrive) {
    let examMins = hourExam * 60 + minutesExam;
    let arrivalMins = hourArrive * 60 + minArrive;
    let timeDiff = arrivalMins - examMins;

    if (timeDiff > 0) {
        console.log(`Late`);
        let hours = Math.floor(timeDiff / 60);
        let mins = timeDiff % 60;
        if (hours > 0) {
            console.log(`${hours}:${mins < 10 ? "0" : ""}${mins} hours after the start`);
        } else {
            console.log(`${mins} minutes after the start`);
        }
    } else if (timeDiff >= -30) {
        console.log(`On time`);
        if (timeDiff < 0) {
            console.log(`${Math.abs(timeDiff)} minutes before the start`);
        }
    } else {
        console.log("Early");
        let absDiff = Math.abs(timeDiff);
        let hours = Math.floor(absDiff / 60);
        let mins = absDiff % 60;
        if (hours > 0) {
            console.log(`${hours}:${mins < 10 ? "0" : ""}${mins} hours before the start`);
        } else {
            console.log(`${mins} minutes before the start`);
        }
    }
}
onTimeExam(11,
    30,
    10,
    55)