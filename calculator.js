function calculatorDeposit(deposit, mounths, yearPercent) {
    let totalSum = deposit + mounths * ((deposit * (yearPercent / 100)) / 12);
    console.log(totalSum);
}
calculatorDeposit(200, 3, 5.7);