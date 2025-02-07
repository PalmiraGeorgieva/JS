/*⦁	Premiere – премиерна прожекция, на цена 12.00 лева.
⦁	Normal – стандартна прожекция, на цена 7.50 лева.
⦁	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
 */

function cinema(project, countRow, countColumn) {
    let income = 0;

    if (project == "Premiere") {
        income = countRow * countColumn * 12;
    } else if (project == "Normal") {
        income = countRow * countColumn * 7.50;

    } else if(project == "Discount") {
        income = countRow * countColumn * 5;
    }
    console.log(`${income.toFixed(2)} leva.`);

}
cinema("Premiere",
10,
12)