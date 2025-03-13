/*брой екскурзии и техните цени. Фирмата предлага два вида екскурзии – море ("sea") на цена 680 лева и
 планина
 ("mountain") на цена 499 лева. При избор на даден пакет, към общата сума се добавя съответната цена.
  При избор на пакет, 
който вече не е наличен (броят му е равен на 0), не трябва да се добавя към общата цена. */
function excursionSale(input) {
    let index = 0;
    let countTripSea = Number(input[index]);
    index++
    let countTripMountain = Number(input[index])
    index++;
    
    let profit = 0

    let command = input[index];
    index++
    while (command !== "Stop") {
        let package = command;
        if (package === "sea" && countTripSea > 0) {
            countTripSea--;
            profit += 680;

        } else if (package === "mountain" && countTripMountain > 0) {
            countTripMountain--;
            profit += 499;
        }

        if (countTripSea == 0 && countTripMountain == 0) {
            console.log(`Good job! Everything is sold.`)
            console.log(`Profit: ${profit} leva.`)
            return;
        
        }
        command = input[index];
        index++;

        
    }
    console.log(`Profit: ${profit} leva.`)
    
}
excursionSale((["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"]))