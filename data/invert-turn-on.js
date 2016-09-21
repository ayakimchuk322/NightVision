function turnOn() {
    document.body.style.filter = "invert(100%)";

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - invert mode ON]");
}

turnOn();