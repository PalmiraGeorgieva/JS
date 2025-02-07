/* Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
Когато почива, стопанинът му си играе с него  по 127 минути на ден.
*/

function sleepingTom(countDaysOff) {
   let dayOff = countDaysOff * 127;
   let workDays = (365 - countDaysOff) * 63;
   let sumDays = dayOff + workDays;

   if (30000 >sumDays) {
     let leftTime = 30000 - sumDays;
     let hours = Math.floor(leftTime / 60)
     let minutes = Math.floor(leftTime % 60)
    console.log(`Tom sleeps well`);
    console.log(`${hours} hours and ${minutes} minutes less for play`)
   } else {
     let addedTime = sumDays - 30000;
     let hours = Math.floor(addedTime / 60); 
     let minutes = Math.floor(addedTime % 60);
     console.log(`Tom will run away`);
     console.log(`${hours} hours and ${minutes} minutes more for play`)
   }

}
sleepingTom(20)