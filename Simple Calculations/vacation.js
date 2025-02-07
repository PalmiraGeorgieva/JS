function booksCount(countPages, pagesPerHours, days) {
    let totalTime = countPages / pagesPerHours;
    let neededHours = totalTime / days;
    console.log(neededHours);
}
booksCount(432, 15, 4);