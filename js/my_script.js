var container = document.getElementById('sliding_card')

container.onclick = function () {
    if (container.className.includes("sliding_up")) {
        container.classList.remove("sliding_up")
    } else {
        container.className += " sliding_up";
    }
}

