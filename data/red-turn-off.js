function turnOff() {

    // Disable brightness filter
    document.documentElement.style.filter = "brightness(100%)";

    // Remove stylesheet with high contrast mode styles
    var highStyle = document.getElementById("highstyleid");
    highStyle.parentNode.removeChild(highStyle);

    // Remove added custom class
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        allElements[i].classList.remove("ToBlack987");
    }

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - red alert mode OFF]");
}

turnOff();