function everest(input) {
    let index = 0;
    let command = input[index];
    index++;
    let climbing = 5364;
    let day = 1;

    while (command !== "END") {

        if(command === "Yes") {
            day++;
        } 
        let climbetMeters = Number(input[index]);
        index++;
        climbing += climbetMeters;
        if (climbing >= 8848) {
            break;
             
        }
 
        if (day == 6) {
            climbing -= climbetMeters
            break;
        }
        command = input[index];
        index++
        
        
    }
    if (climbing >= 8848) {
        console.log(`Goal reached for ${day} days!`);
        
    } else {
        console.log(`Failed!`);
        console.log(`${climbing}`);
    }
}
everest((["Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"]))