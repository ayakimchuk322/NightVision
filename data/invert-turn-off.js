function turnOff() {
    document.documentElement.style.filter = "invert(0%)";

    var invertStyle = document.getElementById("invertstyleid");
    invertStyle.parentNode.removeChild(invertStyle);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - invert mode OFF]");
}

turnOff();