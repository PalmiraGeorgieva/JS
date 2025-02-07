function streamOfLetters(input) {
    let index = 0;
    let letter = input[index];
    index++;
    let word = "";
    let foundC = false;
    let foundO = false;
    let foundN = false;

    while (letter !== "End") {
       if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
           if (letter === "c" && !foundC) {
              foundC = true;   
            } else if (letter == "o" && !foundO) {
              foundO = true;

            } else if (letter == "n" && !foundN) {
              foundN = true;
            } else {
                word += letter;
            }

            if (foundC && foundN && foundO) {
                console.log(word + "");
                word = "";
                foundC = false;
                foundO = false;
                foundN = false;
            }
        }
        letter = input[index];
        index++;   
    }
}
streamOfLetters((["H ",
    "n",
    "e",
    "l",
    "l",
    "o",
    "o",
    "c",
    "t",
    "c",
    "h",
    "o",
    "e",
    "r",
    "e",
    "n",
    "e",
    "End"]))