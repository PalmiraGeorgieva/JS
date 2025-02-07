/* работно място заема 70 на 120 cm (маса с размер 70 на 40 cm + място за стол и
 преминаване с размер 70 на 80 cm). Коридорът е широк поне 100 cm. 
 Изчислено е, че заради входната врата (която е с отвор 160 cm) се губи точно 1 работно място, 
а заради катедрата (която е с размер 160 на 120 cm) се губят точно 2 работни места. 
Ограничения: 3 ≤ h ≤ w ≤ 100.*/
function schoolSale(w, h) {
    let heightSale = h * 100;
    let widthSale = w * 100;
    let coridor = 100;
    let hSale = heightSale - coridor;
    let placesH = Math.floor(hSale / 70); /*11*/
    let placesW = Math.floor(widthSale / 120); /*12*/
    let placesCount = placesH * placesW - 3;
    console.log(placesCount);

}
schoolSale(8.4, 5.2);