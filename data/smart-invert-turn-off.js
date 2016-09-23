function turnOff() {
    document.documentElement.style.filter = "invert(0%)";

    document.body.style.backgroundColor = "white";

    var imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = "invert(0%)";
    }

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - smart invert mode OFF]");
}

turnOff();