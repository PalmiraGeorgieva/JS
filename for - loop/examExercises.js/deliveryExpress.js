function deliveryExpress(weigthDelivery, service, distance) {
    let price = 0
    
    switch(service) {
        case "standard":
            if (weigthDelivery < 1) {
                price = 0.03 * distance

            }else if (weigthDelivery >=1 && weigthDelivery < 10) {
                price = 0.05 * distance

            } else if (weigthDelivery >= 10 && weigthDelivery < 40) {
                price = 0.10 * distance

            } else if (weigthDelivery >= 40 && weigthDelivery < 90) {
                price = 0.15 * distance

            }else if (weigthDelivery >= 90 && weigthDelivery <= 150) {
                price = 0.20 * distance
            }
            break;
        case "express":
            if (weigthDelivery < 1) {
                price = 0.03 * distance + ((0.03 * 0.80) * weigthDelivery) * distance

            }else if (weigthDelivery >=1 && weigthDelivery < 10) {
                price = 0.05 * distance + (0.05 *  0.40) * distance

            } else if (weigthDelivery >= 10 && weigthDelivery < 40) {
                price = 10 * distance + (0.10 *  0.05) * distance

            } else if (weigthDelivery >= 40 && weigthDelivery < 90) {
                price = 15 * distance + (0.15 *  0.02) * distance

            }else if (weigthDelivery >= 90 && weigthDelivery <= 150) {
                price = 20 * distance + (0.20 *  0.01) * distance
                
            }
            break;    
    }
    console.log(`The delivery of your shipment`)
}