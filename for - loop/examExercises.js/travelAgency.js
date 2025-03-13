function travelAgency(town, package, discountVip, daysStay) {
    let price = 0;
   switch (town) {
    case "Bansko":
    case "Borovets":
        if (package === "noEquipment") {
            price = 80; 
        } else if (package === "withEquipment") {
            price = 100; 

        } else {
            console.log(`Invalid input!`)
            return;
        }

       break;
    case "Varna":
    case "Burgas":
        if(package === "withBreakfast") {
            price = 130;
        } else if (package === "noBreakfast") {
            price = 100;
        } else {
            console.log(`Invalid input!`)
            return;
        }
        break;

    default: 
    console.log(`Invalid input!`); 
    return;   
   }

   if (discountVip === "yes") {
    if (package === "noEquipment") {
        price *= 0.95;
    } else if (package === "withEquipment") {
        price *= 0.90;
    } else if (package === "noBreakfast") {
        price *= 0.93;
    } else if (package === "withBreakfast") {
        price *= 0.88;
    }
    } 

   
   if (daysStay < 1) {
    console.log(`Days must be positive number!`)
    return;
   }

   let finalPrice = (daysStay >= 7) ? (price * (daysStay - 1)) : (price * daysStay);
   console.log(`The price is ${finalPrice.toFixed(2)}lv! Have a nice time!`)
    
}
travelAgency("Bansko",
    "withEquipment",
    "no",
    2)