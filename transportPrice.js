/*Такси. Начална такса: 0.70 лв. Дневна тарифа: 0.79 лв. / км.
 Нощна тарифа: 0.90 лв. / км.
Автобус. Дневна / нощна тарифа: 0.09 лв. / км
 Може да се използва за разстояния минимум 20 км.
Влак. Дневна / нощна тарифа: 0.06 лв. / км. 
Може да се използва за разстояния минимум 100 км.
 */
function transportPrice(countKm, dayNight) {
   
   if (countKm < 20 && dayNight == "day") {
       pricePerKm = 0.70 + countKm * 0.79;
   } else if (countKm < 20 && dayNight == "night") {
     pricePerKm = 0.70 + countKm * 0.90;
   } else if (countKm < 100 && dayNight == "day") {
      pricePerKm = countKm * 0.09;
   } else if (countKm < 100 && dayNight == "night") {
      pricePerKm = countKm * 0.09;
   }else if (countKm >= 100 && dayNight == "day") {
      pricePerKm = countKm * 0.06;
   } else {
     pricePerKm = countKm * 0.06;
   }
   console.log(pricePerKm.toFixed(2));
}   
transportPrice(180, "night");