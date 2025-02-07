function equalPairs(input) {
    let index = 0
    let n = Number(input[index]);
    index++;
    let prevSum = null;
    let maxDiff = 0;
    let areEqual = true;
    for (let i = 0; i < n * 2; i += 2) {
        let num1 = Number(input[index]);
        index++;
        let num2 = Number(input[index]);
        index++;
        let sum = num1 + num2;
        
        if (prevSum !== null) {
            let diff = Math.abs(sum - prevSum);
            if (diff > maxDiff) {
                maxDiff = diff;
            }
            if (sum !== prevSum) {
                areEqual = false;
            }
        }
        prevSum = sum;
    }
    if (areEqual) {
        console.log(`Yes, value=${prevSum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}
equalPairs((["3",
    "1",
    "2",
    "0",
    "3",
    "4",
    "-1"]))