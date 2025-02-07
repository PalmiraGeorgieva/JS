function footballTournament(input) {
    let index = 0;
    let capacityStadium = Number(input[index]);
    index++;
    let countFans = Number(input[index]);
    index++;
    let fanA = 0;
    let fanB = 0;
    let fanV = 0;
    let fanG = 0;
    for (let i = 0; i <= countFans; i++) {
        let sectorFans = input[index]; // "A", "B", "V" и "G"
        index++;

        switch(sectorFans) {
            case "A": fanA++; break;
            case "B": fanB++; break;
            case "V": fanV++; break;
            case "G": fanG++; break;
        }
        
    }
    let percentFanA = fanA / countFans * 100;
    let percentFanB = fanB / countFans * 100;
    let percentFanV = fanV / countFans * 100;
    let percentFanG = fanG / countFans * 100;
    let percentAllFans = countFans / capacityStadium * 100;
    console.log(`${percentFanA.toFixed(2)}%`);
    console.log(`${percentFanB.toFixed(2)}%`);
    console.log(`${percentFanV.toFixed(2)}%`);
    console.log(`${percentFanG.toFixed(2)}%`);
    console.log(`${percentAllFans.toFixed(2)}%`);
}
footballTournament((["76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"]))