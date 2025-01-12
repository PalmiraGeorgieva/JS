/* ⦁	Пилешко меню –  10.35 лв. 
⦁	Меню с риба – 12.40 лв. 
⦁	Вегетарианско меню  – 8.15 лв. 
Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
Цената на доставка е 2.50 лв и се начислява най-накрая.      */
function delivery(countChickenMenu, countFishMenu, countVeganMenu) {
    let priceChickenMenu = countChickenMenu * 10.35;
    let priceFishMenu = countFishMenu * 12.40;
    let priceVeganMenu = countVeganMenu * 8.15;
    let totalPriceMenu = priceChickenMenu + priceFishMenu + priceVeganMenu;
    let priceDesert = totalPriceMenu * 0.20;
    priceDelivery = 2.50;
    let finalPriceDelivery = totalPriceMenu + priceDesert + 2.50;
    console.log(finalPriceDelivery);
}

delivery(2, 4, 3);