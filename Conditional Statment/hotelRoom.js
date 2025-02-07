function hotelRoom(month, nightCount) {
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch(month) {
        case 'May':
        case 'October':
            studioPrice = nightCount * 50;
            apartmentPrice = nightCount * 65;

            if (nightCount > 7 && nightCount <= 14) {
                studioPrice *= 0.95

            } else if (nightCount > 14) {
                studioPrice *= 0.70;

            }
            break;   
        case 'June':
        case 'September':
            studioPrice = nightCount * 75.20;
            apartmentPrice = nightCount * 68.70;
            if (nightCount > 14) {
                studioPrice *= 0.80;
            }
            break;   
        case 'July':
        case 'August':
            studioPrice = nightCount * 76;
            apartmentPrice = nightCount * 77;
            break              
    }
    if (nightCount > 14) {
        apartmentPrice *= 0.9;
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
   
}
hotelRoom("June",
14)