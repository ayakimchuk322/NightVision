function turnOff() {
    var matrixStyle = document.getElementById("matrixstyleid");
    matrixStyle.parentNode.removeChild(matrixStyle);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - matrix mode OFF]");
}

turnOff();