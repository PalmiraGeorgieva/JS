/*room for one person" – 18.00 лв за нощувка
"apartment" – 25.00 лв за нощувка 
"president apartment" – 35.00 лв за нощувка
Ако оценката му е позитивна, към цената с вече приспаднатото намаление Дядо Коледа добавя 25%  към нея.
 Ако оценката му е негативна приспада от цената 10%.
 */

function santasHoliday(daysStay, typeRoom, value) {
    let price = 0
    let discount = 0
    switch(typeRoom) {
        case "room for one person":
            price = 18.00;
            if (daysStay  < 10) {
                discount = price * (daysStay - 1)
            } else if (daysStay  >= 10 && daysStay <= 15) {
                discount = price * (daysStay - 1);
            } else {
                discount = price * (daysStay - 1);
            }
            break;
        case "apartment":
            price = 25.00;
            if (daysStay < 10) {
                discount = (price * (daysStay - 1)) * 0.70
            } else if (daysStay >= 10 && daysStay <= 15) {
                discount = (price * (daysStay - 1)) * 0.65;
            } else {
                discount = (price * (daysStay - 1)) * 0.50;
            }
            break;
        case "president apartment":
            price = 35.00;
            if (daysStay < 10) {
                discount = (price * (daysStay - 1)) * 0.90
            } else if (daysStay >= 10 && daysStay <= 15) {
                discount = (price *(daysStay - 1)) * 0.85;
            } else {
                discount = (price * (daysStay - 1)) * 0.80 ;
            }
            break;    

    }
    
    if (value === "positive") {
        discount *= 1.25

    } else if(value === "negative") {
        discount *= 0.90

    }
    console.log(`${discount.toFixed(2)}`)


}
santasHoliday(30,
    "president apartment",
    "negative")