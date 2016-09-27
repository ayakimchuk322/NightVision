function turnOff() {

    // Disable brightness filter
    document.documentElement.style.filter = "brightness(100%)";

    // Remove stylesheet with matrix mode styles
    var matrixStyle = document.getElementById("matrixstyleid");
    matrixStyle.parentNode.removeChild(matrixStyle);

    // Remove added custom class
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        allElements[i].classList.remove("ToBlack987");
    }

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - matrix mode OFF]");
}

turnOff();