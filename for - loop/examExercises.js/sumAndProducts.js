function sumAndProducts(arg1) {
    let n = String(arg1);
    let a = Number(n[0]);
    let b = Number(n[1]);
    let c = Number(n[2])
    for (let a = 1; a < 10; a++) {
        for(let b = 9; b > a; b--) {
            for(let c = 1; c < 10; c++) {
                for(let d = 9; d > c; d--) {

                    let sum = a + b + c + d
                    let product = d * c * b * a;

                    if (sum === product && n % 10 === 5) {
                        console.log(`${a}${b}${c}${d}`);
                        return;
                    }

                    if (Math.floor(product / sum) == 3 && n % 3 === 0) {
                       console.log(`${d}${c}${b}${a}`);
                       return;
                       
                    }

                }
            }
        }
    }
    console.log(`Nothing found`)
    
}
sumAndProducts(123)