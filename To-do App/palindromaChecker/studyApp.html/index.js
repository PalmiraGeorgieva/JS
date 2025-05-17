const data = [{
    word: "Мама", 
    img: "images/mama.jpg"
},
{
    word: "Тати", 
    img: "images/tati.jpg"
},
{
    word: "Топка", 
    img: "images/topka.jpg"
}];

let index = 0;

function showWord() {
    document.getElementById("word").textContent = data[index].word;
    document.getElementById("picture").src = data[index].img;
    document.getElementById("picture").alt = data[index].word;
}

const sayWord = document.getElementById("say-word");
const nextWord = document.getElementById("next-word");

sayWord.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(data[index].word);
    utterance.lang = "bg-BG";
    speechSynthesis.speak(utterance);

})

nextWord.addEventListener("click", () => {
    index = (index + 1) % data.length;
    showWord()
})

showWord()