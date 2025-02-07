/*⦁	Име на сериал – текст
⦁	Продължителност на епизод  – цяло число в диапазона [10… 90]
⦁	Продължителност на почивката  – цяло число в диапазона [10… 120]
По време на почивката отделяте време за обяд и време за отдих.
 Времето за обяд ще бъде 1/8 от времето за почивка, 
а времето за отдих ще бъде 1/4 от времето за почивка. 
 */
function lunchTime(serialName, timeEpisode, breakTime) {
    let lunchDuration = (1 / 8) * breakTime;
    let leisuereDuration = (1 / 4) * breakTime;

    let timeToWatch = breakTime - lunchDuration - leisuereDuration;

    if (timeToWatch >= timeEpisode) {
        let timeLeft = timeToWatch - timeEpisode;
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft)} minutes free time.`)
    } else {
        let neededTime = timeEpisode - timeToWatch;
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(neededTime)} more minutes.`)
    }
}
lunchTime("Teen Wolf",
48,
60
);