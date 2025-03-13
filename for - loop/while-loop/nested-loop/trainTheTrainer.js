function trainTheTrainer(input) {
    let index = 0;
    let countPeople = input[index];
    index++;

    let command = input[index];
    index++;

    let countGrade = 0;
    let sumGrades = 0;

    while (command !== "Finish") {
        let presentation = command;
        let sumCurrentGrades = 0;

        for (let i = 1; i <= countPeople; i++) {
            let currentGrade = Number(input[index]);
            index++;
            countGrade++;
            sumGrades += currentGrade
            sumCurrentGrades += currentGrade;

        }
        let avgGrades = sumCurrentGrades / countPeople;
        console.log(`${presentation} - ${avgGrades.toFixed(2)}.`)

        command = input[index];
        index++;
    }
    let finalAvgGrades = sumGrades / countGrade;
    console.log(`Student's final assessment is ${finalAvgGrades.toFixed(2)}.`)
}
trainTheTrainer((["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]))