function turnOff() {
    document.body.style.filter = "invert(0%)";

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - invert mode OFF]");
}

turnOff();