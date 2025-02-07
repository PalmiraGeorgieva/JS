function salary(input) {
    let countTabs = input[0];
    let salary = input[1];
    let websites = input.slice(2);
    let penaltry = 0;
    for (let i = 0; i <= countTabs; i++) {
        let website = websites[i]

        if (website === "Facebook") {
            penaltry = 150
            salary -= penaltry;
        } else if(website === "Instagram") {
            penaltry = 100
            salary -= penaltry;
        } else if (website === "Reddit") {
            penaltry = 50;
            salary -= penaltry;

        } else {
            penaltry = 0;
            salary -= penaltry
        }

        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        } 
    }
    if (salary > 0) {
        console.log(salary)
    }    
    
}
salary(([3,
    500,
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"]))