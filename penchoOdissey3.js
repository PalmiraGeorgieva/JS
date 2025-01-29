/*- Сумата от цифрите в кода показва общата сила на картата
- Главните букви трябва да бъдат преобразувани в малки букви
- Малките букви трябва да бъдат преобразувани в главни букви */
function pen4osOdyssey(cipher) {
    const numbers = cipher.match(/\d/g) || [];
    const lowerCaseMatches = cipher.match(/[a-z]/g) || [];
    const upperCaseMatches = cipher.match(/[A-Z]/g) || [];
   
    let totalPowerCard = 0
    totalPowerCard += numbers
    let transformedCipher = cipher.split('')
            .map(char => char === char.toUpperCase() 
                  ? char.toLowerCase()
                  : char.toUpperCase())
            .join('');      

    console.log(transformedCipher);


    if (totalPowerCard > 20) {
        console.log(`The map reveals the your next location! Total power: ${totalPowerCard}`);
    } else {  
        console.log(`The map warns of danger! Total power: ${Math.floor(totalPowerCard)}`);
    }
  
}
pen4osOdyssey("SecreT_tRe4sure!");
