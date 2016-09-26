function turnOff() {

    // Disable invert filter
    document.documentElement.style.filter = "invert(0%)";

    // Remove stylesheet with invert mode styles
    var matrixStyle = document.getElementById("i987");
    matrixStyle.parentNode.removeChild(matrixStyle);

    // Remove added custom class
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        allElements[i].classList.remove("TransToWhite987");
    }

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - invert mode OFF]");
}

turnOff();