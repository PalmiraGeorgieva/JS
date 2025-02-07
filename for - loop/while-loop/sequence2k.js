function sequence2k(arg1) {
    let n = Number(arg1);
    let k = 1;

    while (k <= n) {
        console.log(k);

        k = k * 2 + 1;
    }
    
}
sequence2k(3)