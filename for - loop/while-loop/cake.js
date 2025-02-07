function cake(input) {
    let widthCake = Number(input[0]);
    let lengthCake = Number(input[1]);
    let countCake = widthCake * lengthCake;
    
    let index = 2;
    let command = input[index];
    index++;
    
    
    while (command !== "STOP") {
        let takePieces = Number(command);
        countCake -= takePieces;

        if (countCake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(countCake)} pieces more.`);
            break;
        }
        
        command = input[index];
        index++;
    }
    if (command === "STOP") {
        console.log(`${countCake} pieces are left.`);
    }
}
cake((["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]))