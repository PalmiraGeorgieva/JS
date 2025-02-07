function highJump(input) {
    let index = 0;
    let goal = Number(input[index]);
    index++;
    let currentHigh = goal - 30;
    let jump = 0;
    
    let retry = 0
    while (true) {
        let currentJump = Number(input[index]);
        index++
        jump++;

        if(currentJump > currentHigh) {
            retry = 0;
            currentHigh += 5;
        } else {
            retry++;
        }

        
        if(retry >= 3) {
            break;
        }

    
        if(currentHigh > goal) {
            break;
        }

    }
    if (currentHigh > goal) {
        console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jump} jumps.`)
    } else {
        console.log(`Tihomir failed at ${currentHigh}cm after ${jump} jumps.`)
    }
}
highJump((["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"]))