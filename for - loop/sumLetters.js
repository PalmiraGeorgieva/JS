function sumLetters(text) {
    let sum = 0;
    
    for (let i = 0; i <= text.length; i++) {
        let char = text[i]
        switch(char) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
        }
    }console.log(sum)
}
sumLetters("hello")