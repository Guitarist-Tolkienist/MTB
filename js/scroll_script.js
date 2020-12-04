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

var backgrOpacity = "background-opacity"

$(document).ready(function(){
    $(window).on("scroll",function(){
        top_scroll = $(window).scrollTop();
        var wn = $(window).scrollTop();
        if (wn > 1000) {
            $("#cat-btn").addClass(animateClassAnimated + " " + animateClassBounceInUp)
        } else if(wn < 1100) {
            $("#cat-btn").removeClass(animateClassAnimated + " " + animateClassBounceInUp);
        }
    });
});
