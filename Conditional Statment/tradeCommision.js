function tradeCommission(town, volumeTrade) {
    let commission = 0;
    if (town === "Sofia") {
        if (volumeTrade >= 0 && volumeTrade <= 500) {
            commission = volumeTrade * 0.05;
            console.log(`${commission.toFixed(2)}`);

        } else if (volumeTrade > 500 && volumeTrade <= 1000) {
            commission = volumeTrade * 0.07;
            console.log(`${commission.toFixed(2)}`);

        } else if (volumeTrade > 1000 && volumeTrade <= 10000) {
            commission = volumeTrade * 0.08;
            console.log(`${commission.toFixed(2)}`);

        } else if (volumeTrade > 10000) {
            commission = volumeTrade * 0.12;
            console.log(`${commission.toFixed(2)}`);
        } else {
            console.log(`error`);
        }
    } else if (town === "Varna") {
        if (volumeTrade >= 0 && volumeTrade <= 500) {
            commission = volumeTrade * 0.045;
            console.log(`${commission.toFixed(2)}`);

        } else if (volumeTrade > 500 && volumeTrade <= 1000) {
            commission = volumeTrade * 0.075;
            console.log(`${commission.toFixed(2)}`);

        } else if (volumeTrade > 1000 && volumeTrade <= 10000) {
            commission = volumeTrade * 0.10;
            console.log(`${commission.toFixed(2)}`);

        } else if (volumeTrade > 10000) {
            commission = volumeTrade * 0.13;
            console.log(`${commission.toFixed(2)}`);
        } else {
            console.log(`error`);
        }

    }else if (town === "Plovdiv") {
        if (volumeTrade >= 0 && volumeTrade <= 500) {
            commission = volumeTrade * 0.055;
            console.log(`${commission.toFixed(2)}`);

        } else if (volumeTrade > 500 && volumeTrade <= 1000) {
            commission = volumeTrade * 0.08;
            console.log(`${commission.toFixed(2)}`);

        } else if (volumeTrade > 1000 && volumeTrade <= 10000) {
            commission = volumeTrade * 0.12;
            console.log(`${commission.toFixed(2)}`);

        } else if (volumeTrade > 10000) {
            commission = volumeTrade * 0.145;
            console.log(`${commission.toFixed(2)}`);
        } else {
            console.log(`error`);
        }

    } else {
        console.log(`error`)
    }
}
tradeCommission("Sofia",
1500)