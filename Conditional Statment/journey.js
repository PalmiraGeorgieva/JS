/*⦁	При 100лв. или по-малко – някъде в България
⦁	Лято – 30% от бюджета
⦁	Зима – 70% от бюджета
⦁	При 1000лв. или по малко – някъде на Балканите
⦁	Лято – 40% от бюджета
⦁	Зима – 80% от бюджета
⦁	При повече от 1000лв. – някъде из Европа
⦁	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
 */

function journey(budget, season) {
    let destination = '';
    let place = '';

    switch(season) {
        case "summer":
            
            if (budget <= 100) {
                destination = 'Bulgaria';
                place = 'Camp';
                budget *= 0.30;
            } else if (budget <= 1000 && budget > 100) {
                destination = 'Balkans';
                place = 'Camp';
                budget *= 0.40;
            } else {
                destination = 'Europe';
                place = 'Hotel'
                budget *= 0.90
            }
            break;
        case "winter":
            place = 'Hotel'
            if (budget <= 100) {
                destination = 'Bulgaria';
                budget *= 0.70;
            } else if (budget <= 1000 && budget > 100) {
                destination = 'Balkans';
                budget *= 0.80;
            } else {
                destination = 'Europe';
                place = 'Hotel'
                budget *= 0.90
            }   
            break;    
    }
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`);
}
journey(75,
    "winter")