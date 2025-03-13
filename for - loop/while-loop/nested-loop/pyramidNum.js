function pyramid(arg1) {
    let num = Number(arg1);
    let currentNum = 1;
    let isBigger = false;
    

    for (let rows = 1; rows <= num; rows++) {
        let buff = "";
        for (let cols = 1; cols <= rows; cols++) {
            if (currentNum > num) {
                isBigger = true;
                break;
            }
            buff += currentNum + " ";
            currentNum++;
            
        }
        console.log(buff);
        buff = "";
        if (isBigger) {
            break;
        }
    }
}
pyramid(7)