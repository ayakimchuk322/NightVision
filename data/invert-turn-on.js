function turnOn() {
    document.documentElement.style.filter = "invert(100%)";

    document.body.style.backgroundColor = "black";

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - invert mode ON]");
}

turnOn();