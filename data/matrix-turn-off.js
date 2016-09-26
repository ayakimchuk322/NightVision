function turnOff() {

    // Remove stylesheet with matrix mode styles
    var matrixStyle = document.getElementById("matrixstyleid");
    matrixStyle.parentNode.removeChild(matrixStyle);

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
    console.log("[NightVision - matrix mode OFF]");
}

turnOff();