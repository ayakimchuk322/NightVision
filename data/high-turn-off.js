function turnOff() {

    // Remove stylesheet with high contrast mode styles
    var highStyle = document.getElementById("highstyleid");
    highStyle.parentNode.removeChild(highStyle);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - high contrast mode OFF]");
}

turnOff();