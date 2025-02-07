function examPreparation(input) {
    let index = 0;
    let maxCountBadGrade = Number(input[index]);
    index++;
    let gradeCount = 0; 
    let gradeSum = 0
    let currentBadGrade = 0;

    let command = input[index];
    index++;
    let problemName = '';

    while (command !== "Enough") {
        problemName = command;
        let grade = Number(input[index]);
        index++;
        if (grade <= 4) {
            currentBadGrade++;
            if (currentBadGrade === maxCountBadGrade) {
                console.log(`You need a break, ${currentBadGrade} poor grades.`);
                break;
            }

        }

        gradeCount++
        gradeSum += grade;
        command = input[index];
        index++;

    }
    if (command === "Enough") {
        let avgGrade = gradeSum / gradeCount;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount} `);
        console.log(`Last problem: ${problemName}`)
    }

}
examPreparation((["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]))