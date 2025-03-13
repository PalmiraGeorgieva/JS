function sumAndProducts(arg1) {
    let n = Number(arg1);

    for (let a = 9; a >= 1; a--) { // Започваме от най-голямото число
        for (let b = 9; b >= 0; b--) {
            for (let c = 9; c >= 0; c--) {
                for (let d = 9; d >= 0; d--) {
                    let sum = a + b + c + d;
                    let product = a * b * c * d;

                    // Проверяваме условията
                    if (sum === product && n % 10 === 5) {
                        console.log(`${a}${b}${c}${d}`);
                        return;
                    }
                    if (product === sum * 3 && n % 3 === 0) {
                        // Обръщаме числото преди да го изведем
                        console.log(`${d}${c}${b}${a}`);
                        return;
                    }
                }
            }
        }
    }
    console.log("Nothing found");
}

sumAndProducts(123);