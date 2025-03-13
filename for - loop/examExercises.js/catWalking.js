function catWalking(minutesWalk, countWalks, acceptedCals) {
    let walkDuration = minutesWalk * countWalks;
    let losingFats = walkDuration * 5;
    let percentCals = 0.50 * acceptedCals;
    if (percentCals <= losingFats) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${losingFats}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${losingFats}.`)
    }

}
catWalking(30,
    3,
    600)