/* ⦁	Пъзел - 2.60 лв.
⦁	Говореща кукла - 3 лв.
⦁	Плюшено мече - 4.10 лв.
⦁	Миньон - 8.20 лв.
⦁	Камионче - 2 лв.
if orderToys >= 50 discount 25% from total;
rent = 10%;
*/
function toyShop(tripPrice, countPuzzles, countDolls, countTeddyBears, countMinions, countTrucks) {
    let startSum = tripPrice;
    let sum = countPuzzles * 2.60 + countDolls * 3 + countTeddyBears * 4.10 + countMinions * 8.20 + countTrucks * 2;
    let countToys = countPuzzles + countDolls + countTeddyBears + countMinions + countTrucks;

    if(countToys >= 50) {
      discount = sum - sum * 0.25;  
    }else if (countToys < 50) {
        discount = sum;    
    }
    
    let endPrice = discount;  
    rentDiscount = endPrice * 0.10;
    win = endPrice - rentDiscount;
    
    if(win >= tripPrice) {
        let differense = win - tripPrice;
        let winDifferense = differense.toFixed(2);
        console.log(`Yes! ${winDifferense} lv left.`);
    }
    else if(win < tripPrice) {
        let leftSum = tripPrice - win;
        let left = leftSum.toFixed(2);
        console.log(`Not enough money! ${left} lv needed.`);
    }


}
toyShop(320,
    8,
    2,
    5,
    5,
    1);