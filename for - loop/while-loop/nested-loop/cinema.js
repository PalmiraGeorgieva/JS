function cinema(input) {
    let standardTicketCount = 0;
    let studentTicketCount = 0;
    let kidsTicket = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let movieTitle = command;

        let hallSeats = Number(input[index]);
        index++;
        let seatsTaken = 0 

        let command1 = input[index];
        index++;

        while (command1 !== "End") {
            let ticketType = command1;

            if (ticketType === 'standard') {
                standardTicketCount++;
            } else if (ticketType === 'student') {
                studentTicketCount++;
            } else if (ticketType === "kid") {
                kidsTicket++;
            } 

            seatsTaken++;

            if (seatsTaken === hallSeats) {
                break;
            }
            command1 = input[index];
            index++;
            
    
        }
        let percentSeatsTaken = seatsTaken /hallSeats * 100
        console.log(`${movieTitle} - ${percentSeatsTaken.toFixed(2)}% full.`)
        
        command = input[index];
        index++;
        

    }
    let totalTicketCount = standardTicketCount + studentTicketCount + kidsTicket;
    let standardTicketPercent = standardTicketCount / totalTicketCount * 100;
    let studentTicketPercent = studentTicketCount / totalTicketCount * 100;
    let kidsTicketPercent = kidsTicket / totalTicketCount * 100;
    console.log(`Total tickets: ${totalTicketCount}`)
    console.log(`${studentTicketPercent.toFixed(2)}% student tickets.`)
    console.log(`${standardTicketPercent.toFixed(2)}% standard tickets.`)
    console.log(`${kidsTicketPercent.toFixed(2)}% kids tickets.`)
    

}
cinema((["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]))