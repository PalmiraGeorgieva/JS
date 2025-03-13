/*1 биткойн = 1168 лева.
1 китайски юан = 0.15 долара.
1 долар = 1.76 лева.
1 евро = 1.95 лева.
*/
function changeBureau(countBitcoint, countUan, commission) {
    let bitcoint = countBitcoint * 1168;
    let uan = countUan * 0.15;
    let dollars = uan * 1.76
    let totalBGN = bitcoint + dollars
    let changeToEuro = totalBGN / 1.95;
    let priceWithCommission = (commission/100) * changeToEuro;
    let result = changeToEuro - priceWithCommission;
    console.log(result.toFixed(2));
}
changeBureau(1, 5, 5)