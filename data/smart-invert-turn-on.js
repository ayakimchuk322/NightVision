function turnOn() {
    document.documentElement.style.filter = "invert(100%)";

    document.body.style.backgroundColor = "black";

    var imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = "invert(100%)";
    }

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - smart invert mode ON]");
}

turnOn();