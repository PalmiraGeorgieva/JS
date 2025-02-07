function pen4oWeek4(startNum, endNum) {
    let foundLuckyNum = false;

    for (let num = startNum; num <= endNum; num++) {
        let luckyNum = num;
        let reversedNum = 0;
        while (luckyNum > 0) {
            let lastDigit = luckyNum % 10;
            reversedNum = reversedNum * 10 + lastDigit;
            luckyNum = Math.floor(luckyNum / 10);
        }

    
        if(num % 2 == 0 && num % 3 === 0 && num === reversedNum) {
            console.log(num);
            foundLuckyNum = true;
            break;
            
        } 
    }
    if (!foundLuckyNum) {
        console.log(`The statues remain silent…`)
    }    
}
pen4oWeek4(1, 50)