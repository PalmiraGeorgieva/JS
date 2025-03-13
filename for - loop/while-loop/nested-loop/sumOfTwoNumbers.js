function sumOfTwoNums(n1, n2, n3) {
   let startNum = Number(n1);
   let end = Number(n2);
   let magicNum = Number(n3);
   let combinationCount = 0;
   let isFound = false;

   for (let x = startNum; x <= end; x++) {
    for(let y = startNum; y <= end; y++) {
        let sum = x + y;
        combinationCount++;
        if (sum === magicNum) {
            isFound = true;
            console.log(`Combination N:${combinationCount} (${x} + ${y} = ${magicNum})`);
            break;

        }
        
    }
    if (isFound) {
        break;
    }

   }
   if (!isFound) {
    console.log(`${combinationCount} combinations - neither equals ${magicNum}`)
   }
   
}
sumOfTwoNums(23,
    24,
    20)