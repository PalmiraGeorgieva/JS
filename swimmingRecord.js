/* ⦁	Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
⦁	Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
⦁	Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00]
Функцията получава: рекордът в секунди,  който Иван трябва да подобри,  разстоянието в метри,
 което трябва да преплува и времето в секунди, за което плува разстояние от 1 м.
 Съпротивлението на водата го забавя на всеки 15 м. с 12.5 секунди. 
 резултатът трябва да се закръгли надолу до най-близкото цяло число. - Math.floor()
*/
function swimmingRecord(recordSec, distanceMetre, timeSeconds1m) {

    let neededTimeSwimming = distanceMetre * timeSeconds1m;
    let swimmingDistance = Math.floor(distanceMetre / 15) * 12.5;
    
    let totalRecord = neededTimeSwimming + swimmingDistance;

    if (totalRecord >= recordSec) {
        let neededSec = totalRecord - recordSec;
        console.log(`No, he failed! He was ${neededSec.toFixed(2)} seconds slower.`)

    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalRecord.toFixed(2)} seconds.`) 
    }
}
swimmingRecord(55555.67,
    3017,
    5.03)