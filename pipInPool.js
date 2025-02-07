function pipInPool(volumePool, firstPip, secondPip, hours) {
    let workFirstPip = firstPip * hours;
    let workSecondPip = secondPip * hours;
    let totalWork = workFirstPip + workSecondPip;
    let percentVolume = (totalWork / volumePool) * 100;
    let percentFirstPip = (workFirstPip / totalWork) * 100;
    let percentSecondPip = (workSecondPip / totalWork) * 100;
    if (totalWork <= volumePool) {
        console.log(`The pool is ${percentVolume.toFixed(2)}% full. Pipe 1: ${percentFirstPip.toFixed(2)}%. Pipe 2: ${percentSecondPip.toFixed(2)}%.`)
    } else {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(totalWork - volumePool).toFixed(2)} liters.`)
    }
}
pipInPool(1000,
    100,
    120,
    3)