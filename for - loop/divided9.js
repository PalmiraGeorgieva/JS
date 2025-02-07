function dividetNum9(start, end) {
    let sum = 0;
    let buff = "";

    for(let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            buff += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(buff)
}
dividetNum9(100, 200);