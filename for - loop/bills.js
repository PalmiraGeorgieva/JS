function bills(input) {
    let index = 0;
    let months = Number(input[index]);
    index++;
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let others = 0;

    for (let i = 0; i < months; i++) {
        let billElectricity = Number(input[index]);
        index++;
        electricity += billElectricity;
  
    }
    water = 20 * months;
    internet = 15 * months;
    others = (electricity + water + internet) * 0.20 + (electricity + water + internet);
    let averageBills = (electricity + water + internet + others) / months;
    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${averageBills.toFixed(2)} lv`);
}
bills((["5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22"]))