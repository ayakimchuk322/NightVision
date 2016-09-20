function turnOff() {
    document.body.style.filter = "invert(0%)";

    var imgs = document.images;

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = "invert(0%)";
    }

    consoleOut();
}

function consoleOut() {
    console.log("OFF");
}

turnOff();
consoleOut();