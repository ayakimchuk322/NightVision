function turnOff() {

    // Disable invert filter
    document.documentElement.style.filter = "invert(0%)";

    // Remove stylesheet with smart invert mode styles
    var matrixStyle = document.getElementById("si987");
    matrixStyle.parentNode.removeChild(matrixStyle);

    // Remove added custom class
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        allElements[i].classList.remove("TransToWhite987");
    }

    // Re-disable invert filter for images
    var imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = "invert(0%)";
    }

    // Re-disable invert filter for videos
    var videos = document.getElementsByTagName("video");

    for (var i = 0; i < videos.length; i++) {
        videos[i].style.filter = "invert(0%)";
    }

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - smart invert mode OFF]");
}

turnOff();