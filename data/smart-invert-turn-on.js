function turnOn() {
    document.body.style.filter = "invert(100%)";

    var imgs = document.images;

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = "invert(100%) !important";
    }

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - smart invert mode ON]");
}

turnOn();