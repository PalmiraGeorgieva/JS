function trapec(b1, b2, h) {
    let area = (b1 + b2) * h / 2;
    let formatArea = area.toFixed(2);
    console.log(formatArea);
}

trapec(8, 13, 7);