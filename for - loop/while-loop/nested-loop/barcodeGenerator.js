function barcodeGenerator(startNum, endNum) {
    let firstStart = Math.floor(startNum / 1000);
    let secondStart = Math.floor((startNum / 100) % 10);
    let thirdStart = Math.floor((startNum / 10) % 10);
    let fourthStart = (startNum % 10);

    let firstEnd = Math.floor(endNum / 1000);
    let secondEnd = Math.floor((endNum / 100) % 10);
    let thirdEnd = Math.floor((endNum / 10) % 10);
    let fourthEnd = endNum % 10;
    let result = ' '
    
    for (let num1 = firstStart; num1 <= firstEnd; num1++) {
        for (let num2 = secondStart; num2 <= secondEnd; num2++) {
            for (let num3 = thirdStart; num3 <= thirdEnd; num3++) {
                for (let num4 = fourthStart; num4 <= fourthEnd; num4++) {
                    if (num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0 && num4 % 2 !== 0) {
                        result +=`${num1}${num2}${num3}${num4} `;
                    }
                }
            }
        }
    }
    console.log(result.trim())
}
barcodeGenerator(2345,
    6789)