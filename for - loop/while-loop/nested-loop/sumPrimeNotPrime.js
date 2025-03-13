function sumPrimeNotPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let prime = 0;
    let notPrime = 0;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        let isPrime = true;

        if(currentNum === 0 || currentNum === 1) {
            isPrime = false;
        } else {
            for (let i = 2; i < currentNum; i++) {
                if (currentNum % i == 0) {
                    isPrime = false;
                    break;
                }
            }

        }
        if (isPrime) {
            prime += currentNum;
        } else {
            notPrime += currentNum
        }
        command = input[index];
        index++;

        
        
    }
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${notPrime}`);


}
sumPrimeNotPrime((["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]))