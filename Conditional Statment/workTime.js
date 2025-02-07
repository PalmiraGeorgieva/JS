/*function workTime(hour, dayOfWeek) {
    if (hour >= 10 && hour <= 18 && dayOfWeek == "Monday") {
        console.log("open");
    } else if (hour >= 10 && hour <= 18 && dayOfWeek == "Tuesday") {
        console.log("open");
    } else if (hour >= 10 && hour <= 18 && dayOfWeek == "Wendsday") {
        console.log("open");
    } else if (hour >= 10 && hour <= 18 && dayOfWeek == "Thursday") {
        console.log("open");
    } else if (hour >= 10 && hour <= 18 && dayOfWeek == "Friday") {
        console.log("open");
    } else if (hour >= 10 && hour <= 18 && dayOfWeek == "Saturday") {
        console.log("open");
    } else {
        console.log("closed");
    }
}*/

function workingTime(hour, dayOfWeek) {
    if (hour >= 10 && hour <= 18 && dayOfWeek !== "Sunday") {
        console.log("open");
    } else {
        console.log("closed");
    }
}
workingTime(11,
    "Sunday")
