/*- Сумата от цифрите в кода показва общата сила на картата
- Главните букви трябва да бъдат преобразувани в малки букви
- Малките букви трябва да бъдат преобразувани в главни букви */
function pen4osOdyssey(cipher) {
    const numbers = cipher.match(/\d/g) || [];
    const lowerCaseMatches = cipher.match(/[a-z]/g) || [];
    const upperCaseMatches = cipher.match(/[A-Z]/g) || [];

    const transformLowerLetters = lowerCaseMatches.map(char => char.toUpperCase());
    const transformUpperLetters = upperCaseMatches.map(char => char.toLowerCase());

    const totalPowerCard = numbers.reduce((sum, num) => sum + Number(num), 0);
   

    let decryptedText = cipher.split("").map(char => {
        if (/[a-z]/.test(char)) {
            return transformLowerLetters.length > 0 ? transformLowerLetters.shift() : char;
        } else if (/[A-Z]/.test(char)) {
            return transformUpperLetters.length > 0 ? transformUpperLetters.shift() : char;
        } else {
            return char;
        }
    }).join("");

    console.log(`${decryptedText}`);

    if (totalPowerCard > 20) {
        console.log(`The map reveals the your next location! Total power: ${totalPowerCard}`);
    } else {  
        console.log(`The map warns of danger! Total power: ${totalPowerCard}`);
    }
  
}
pen4osOdyssey("SecreT_tRe4sure!");