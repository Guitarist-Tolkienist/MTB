
var blue_color = "#76c7c0";


var canvas = document.getElementById("catalog-left-blue-tr");
var context = canvas.getContext('2d');
canvas_height = canvas.offsetHeight;
canvas_width = canvas.offsetWidth;

context.beginPath();
if (getWidth() > 990) {
    context.moveTo(-10, 10);

    context.lineTo(300, 85);
    context.lineTo(0, 140);

    context.lineTo(-10, 10);
} else {
    context.moveTo(0, 10);

    context.lineTo(300, 83);
    context.lineTo(0, 140);

    context.lineTo(0, 10);
}

context.closePath();
context.shadowColor = "rgba(0, 0, 0, 0.2)";
context.shadowBlur = 7;
context.shadowOffsetX = 2;
context.shadowOffsetY = 5;
context.fillStyle = blue_color;
context.fill();

/*New blue trianlge*/
canvas = document.getElementById("catalog-right-blue-tr");
context = canvas.getContext('2d');
canvas_height = canvas.offsetHeight;
canvas_width = canvas.offsetWidth;

context.beginPath();
if (getWidth() > 990) {
    context.moveTo(300, 0);

    context.lineTo(0, 55);
    context.lineTo(300, 135);

    context.lineTo(300, 0);
} else  {
    context.moveTo(300, 10);

    context.lineTo(40, 55);
    context.lineTo(300, 127);

    context.lineTo(300, 10);
}
context.closePath();

context.shadowColor = "rgba(0, 0, 0, 0.2)";
context.shadowBlur = 15;
context.shadowOffsetX = 2;
context.shadowOffsetY = 5;
context.fillStyle = blue_color;
context.fill();
