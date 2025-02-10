/*- Точното количество вода, което трябва да има в кладенеца (target volume)
- На следващите редове - поредица от числа, представляващи капацитета на всяко канче, което използва.
- Общото количество вода достигне **точно** зададеното количество
ИЛИ
- Пенчо въведе отрицателно число, което ще накара кладенеца да се затвори незабавно
ИЛИ
- Пенчо препълни кладенеца с вода, което ще накара кладенеца да се затвори незабавно */
function pen4oWeek5(targetVolume, input) {
    let index = 0
    let totalQuantity = 0
    while (targetVolume !== totalQuantity) {
        let capacityCanne = Number(input[index]);
        index++;
        if (capacityCanne < 0) {
            console.log(`Failure! The well has been sealed.`);
            break;
        totalQuantity += capacityCanne
        
        
        }

        if (totalQuantity > targetVolume) {
            console.log(`Overflow! The well rejects your offering.`);
            break;
        } 
        if (targetVolume === totalQuantity) {
        console.log(`Success! The well reveals its precious treasure!`);
        
    } 
    

    }
    
}
pen4oWeek5(50, [30, 20])
