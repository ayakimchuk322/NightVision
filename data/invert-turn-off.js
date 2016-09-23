function turnOff() {
    document.documentElement.style.filter = "invert(0%)";

    document.documentElement.style.backgroundColor = "white";

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - invert mode OFF]");
}

turnOff();