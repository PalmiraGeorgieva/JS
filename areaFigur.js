function areaOfFigures(figure, sideA, sideB) {
   if (figure === "square") {
    let area = sideA * sideA;
    console.log(area.toFixed(3));
   } else if (figure === "rectangle") {
      let area = sideA * sideB;
      console.log(area.toFixed(3));
   } else if (figure === "circle") {
     let radius = Number(sideA);
     let area = Math.pow(radius, 2) * Math.PI;
     console.log(area.toFixed(3));
   } else if (figure === "triangle") {
      let h = sideB;
      let area = sideA * h / 2;
      console.log(area.toFixed(3));
   }
}
areaOfFigures("circle",
6);