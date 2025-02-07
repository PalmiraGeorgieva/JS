function skiTrip(days, spaceType, feedback) {
    let nights = days - 1;
    let price = 0;

    switch(spaceType) {
       case "room for one person":
           price = nights * 18;
           break
       case "apartment":
           price = nights * 25;
           if (nights < 10) {
               price *= 0.7;
           } else if (nights <= 15) {
               price *= 0.65;
           } else {
               price *= 0.5;
           }
           break;
       case "president apartment":
           price = nights * 35;
           if (nights < 10) {
               price *= 0.9;
           } else if (nights <= 15) {
               price *= 0.85;
           } else {
               price *= 0.8;
           }
           break;        
   }
   if (feedback === "positive") {
       price *= 1.25;

   } else if (feedback === "negative") {
       price *= 0.9;

   } 
   console.log(price.toFixed(2));

}
skiTrip()