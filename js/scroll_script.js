function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

var top_scroll;

var animateClassAnimated = "animated"
var animateClassBounceInUp = "bounceInUp"
var animateClassBackInRight = "backInRight"

$(document).ready(function(){
    $(window).on("scroll",function(){
        top_scroll = $(window).scrollTop();
        var wn = $(window).scrollTop();

        if (wn > 1000) {
            $("#cat-btn").addClass(animateClassAnimated + " " + animateClassBounceInUp)
        } else if(wn > 800){
            // $("#train-main-heading").addClass(animateClassAnimated + " " + animateClassBackInRight)
        } else if(wn < 1100){
            if (wn < 800) {
                // $("#train-main-heading").removeClass(animateClassAnimated + " " + animateClassBackInRight)
            }
            $("#cat-btn").removeClass(animateClassAnimated + " " + animateClassBounceInUp);
        }
    });
});

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
    console.log(getWidth())
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
