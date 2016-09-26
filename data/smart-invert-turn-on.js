function turnOn() {
    document.documentElement.style.filter = "invert(100%)";

    var smartInvertStyle = document.createElement("style");
    var smartInvertStyleId = document.createAttribute("id");
    smartInvertStyleId.value = "smartinvertstyleid";
    smartInvertStyle.setAttributeNode(smartInvertStyleId);
    document.head.appendChild(smartInvertStyle);

    var smartInvertSheet = smartInvertStyle.sheet;

    smartInvertSheet.insertRule("body {background-color: black}", 0);

    var imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = "invert(100%)";
    }

    var videos = document.getElementsByTagName("video");

    for (var i = 0; i < videos.length; i++) {
        videos[i].style.filter = "invert(100%)";
    }

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - smart invert mode ON]");
}

turnOn();