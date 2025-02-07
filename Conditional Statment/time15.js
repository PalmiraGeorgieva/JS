function time(hours, minutes) {
    let totalMins = hours * 60 + minutes;
    let minutesPlus15 = totalMins + 15;
    let newHours = Math.floor(minutesPlus15 /60);
    let newMins = minutesPlus15 % 60;
    if(newHours === 24) {
        newHours = 0;
    }

    if (newMins < 10) {
        console.log(`${newHours}:0${newMins}`)
    } else {
        console.log(`${newHours}:${newMins}`)
    }
} 
time(1, 46)