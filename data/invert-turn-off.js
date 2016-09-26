function turnOff() {

    // Disable invert filter
    document.documentElement.style.filter = "invert(0%)";

    // Remove stylesheet with invert mode styles
    var matrixStyle = document.getElementById("invertstyleid987");
    matrixStyle.parentNode.removeChild(matrixStyle);

    // Remove added custom class
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        allElements[i].classList.remove("TransToWhite987");
    }

    // Reload all the css without reloading page itself
    // to restore removed rules
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {

        var link = links[i];

        if (link.rel === "stylesheet") {
            link.href += "?";
        }
    }

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - invert mode OFF]");
}

turnOff();