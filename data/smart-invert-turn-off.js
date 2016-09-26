function turnOff() {
    document.documentElement.style.filter = "invert(0%)";

    var smartInvertStyle = document.getElementById("smartinvertstyleid");
    smartInvertStyle.parentNode.removeChild(smartInvertStyle);

    var imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = "invert(0%)";
    }

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