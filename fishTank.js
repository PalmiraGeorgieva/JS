function fishTank(length, width, height, percent) {
let volumeTank = length * width * height;
let volumeLitre = volumeTank / 1000;
occupacyArea = percent / 100;
neededLitre = volumeLitre * (1 - occupacyArea);
console.log(neededLitre);
}

fishTank(85,
    75,
    47,
    17)