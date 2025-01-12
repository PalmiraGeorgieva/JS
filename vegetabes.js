/*⦁	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
⦁	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
⦁	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
⦁	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]
1 evro = 1.94 lv
 */
function vegetables(priceKgVege, priceKgFruits, totalKgVege, totalKgFruit) {
   let vegeAmount = priceKgVege * totalKgVege;
   let fruitAmount = priceKgFruits * totalKgFruit;
   let totalAmount = (vegeAmount + fruitAmount).toFixed(2);
   let euroAmount = (totalAmount / 1.94).toFixed(2);
   console.log(euroAmount); 
}
vegetables(0.194,
    19.4,
    10,
    10);