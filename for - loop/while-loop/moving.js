function apartment(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);

    let volume = width * length * heigth;
    let index = 3;
    let command = input[index];
    index++;

    while (command !== "Done") {
        let boxes = Number(command);
        volume -= boxes;
        if (volume <= 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Done") {
        console.log(`${volume} Cubic meters left.`)
    }
}
apartment((["10", 
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]))