function average(input) {
    let index = 0
    let number = Number(input[index])
    index++
    let nums = 0;

    for (let i = 0; i < number; i++) {
        let countNum = Number(input[index]);
        index++
        nums += countNum
    }
    let avgNum = nums / number;
    console.log(`${avgNum.toFixed(2)}`);
}
average((["4",
    "3",
    "2",
    "4",
    "2"]))