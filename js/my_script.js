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
