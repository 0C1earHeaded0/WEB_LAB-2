const canvas = document.getElementById('canvas');

if (canvas.getContext) {
    const smile = canvas.getContext('2d');

    smile.strokeStyle = "blue";

    smile.beginPath();
    smile.arc(75, 75, 50, 0, Math.PI * 2);
    smile.moveTo(110, 75);
    smile.arc(75, 75, 35, 0, Math.PI, false); 
    smile.moveTo(65, 65);
    smile.arc(60, 65, 5, 0, Math.PI * 2); 
    smile.moveTo(95, 65);
    smile.arc(90, 65, 5, 0, Math.PI * 2);
    smile.stroke();

    const rect = canvas.getContext('2d');

    rect.fillStyle = "rgb(200, 0, 0)";
    rect.fillRect(140, 25, 100, 100);

    const anotherFigure = canvas.getContext('2d');

    anotherFigure.fillStyle = "yellow";
    anotherFigure.beginPath();
    anotherFigure.moveTo(260, 25);
    anotherFigure.lineTo(260, 125);
    anotherFigure.lineTo(350, 75)


    anotherFigure.fill();

} else {

}
