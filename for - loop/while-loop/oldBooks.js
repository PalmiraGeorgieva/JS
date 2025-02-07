function oldLibrary(input) {
    let searchedBook = input[0];

    let index = 1;
    let command = input[index];
    index++;
    let checkedBook = 0;

    while (command !== "No More Books") {
        if (command === searchedBook) {
            console.log(`You checked ${checkedBook} books and found it.`);
            break;
        }
        checkedBook++;
        command = input[index];
        index++;

        if (command === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${checkedBook} books.`)
        }
    }
}
oldLibrary((["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]))