function equalEvenOddNum(startNum, endNum) {
    let result = "";
    for (let i = startNum; i <= endNum; i++) {
        let evenNum = 0;
        let oddNum = 0;

        let currentNum = i + "";

        for (let index = 0; index < currentNum.length; index++) {
            let currentDigit = Number(currentNum[index]);

            if (index % 2 == 0) {
                evenNum += currentDigit;
            } else {
                oddNum += currentDigit;
            }

        }
        if (evenNum === oddNum) {
            result += currentNum + " ";
        }
    }
    console.log(result)
}
equalEvenOddNum(100000,
    100050)