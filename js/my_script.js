// var container = document.getElementById('sliding_card')
var container = document.getElementsByClassName('sliding_card')
container = [].slice.call(container);
container.forEach( function (card) {
    card.onclick = function () {
        if (card.className.includes("sliding_up")) {
            card.classList.remove("sliding_up")
        } else {
            card.className += " sliding_up";
        }
    }
})

var nav = document.getElementById('navigation')
var hamburger = document.getElementById("hamburger-button")
var collapse_div = document.getElementById("navbarSupportContent")

hamburger.onclick = function () {
    if (collapse_div.classList.contains("show")) {
        nav.classList.remove("navbar-border-show");
    } else {
        nav.classList.add("navbar-border-show");
    }
}

