function mountainRun(recordSec, distanceMetre, timeInSec) {
    let neededClimb = distanceMetre * timeInSec;
    let addedTime = Math.floor(distanceMetre / 50) * 30;
    let totalTime = neededClimb + addedTime;
    if (totalTime >= recordSec) {
        let neededTime = totalTime - recordSec
        console.log(`No! He was ${neededTime.toFixed(2)} seconds slower.`)
    } else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    }

}
mountainRun(10164,
    1400,
    25)