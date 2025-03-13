function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;

    let goals = 0;
    let maxGoalPlayer = ''
    while (command !== "END") {
        let countGoals = Number(input[index]);
        index++;

        if (countGoals > goals) {
            goals = countGoals
            maxGoalPlayer = command
        }
        if (countGoals >= 10) {
            break

        }
        command = input[index];
        index++;

    }
    console.log(`${maxGoalPlayer} is the best player!`)
    if (goals >= 3) {
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${goals} goals.`)
    }
}
bestPlayer((["Silva",
    "5",
    "Harry Kane",
    "10"]))