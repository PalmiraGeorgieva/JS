/*На края програмата трябва да изпечата процента на студенти с оценка между 2.00 и 2.99,
 между 3.00 и 3.99,
 между 4.00 и 4.99, 
 5.00 или повече. Също така и средният успех на изпита.
 */
function grade(input) {
    let index = 0;
    let countStudents = Number(input[index]);
    index++
    let grade5 = 0;
    let grade4 = 0;
    let grade3 = 0;
    let failGrade = 0;
    let totalGrade = 0;
    

    for (let i = 0; i < countStudents; i++) {
        let grade = Number(input[index])
        index++
        totalGrade += grade;

        if (grade >= 5.00) {
            grade5++;
        }
        if (grade >= 4.00 && grade <= 4.99) {
            grade4++;
        }
        
        if (grade >= 3.00 && grade <= 3.99) {
            grade3++;
        }
        if (grade <= 2.99) {
            failGrade++;
        }   
    }
    let averageGrade = totalGrade / countStudents;
    let percentGrade5 = (grade5 / countStudents) * 100;
    let percentGrade4 = (grade4 / countStudents) * 100;
    let percentGrade3 = (grade3 / countStudents) * 100;
    let percentFailGrade = (failGrade / countStudents) * 100;
    console.log(`Top students: ${percentGrade5.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentGrade4.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentGrade3.toFixed(2)}%`);
    console.log(`Fail: ${percentFailGrade.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
grade((["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5"]));