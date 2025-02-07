function evenPow2(num) {
    for (let i = 0; num >= i; i += 2) {
        console.group(Math.pow(2, i));
    }
}
evenPow2(6)