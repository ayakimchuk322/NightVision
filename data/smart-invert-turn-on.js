function turnOn() {

    // Apply invert filter
    document.documentElement.style.filter = "invert(100%) brightness(75%)";

    // Mark elements with custom class - those with transparent bg
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        var bg = window.getComputedStyle(allElements[i]).getPropertyValue("background-color");

        if (bg == "transparent") {
            allElements[i].classList.add("TransToWhite987");
        }
    }

    // Create stylesheet
    var smartInvertStyle = document.createElement("style");
    var smartInvertStyleId = document.createAttribute("id");
    smartInvertStyleId.value = "si987";
    smartInvertStyle.setAttributeNode(smartInvertStyleId);
    document.head.appendChild(smartInvertStyle);

    var smartInvertSheet = smartInvertStyle.sheet;

    // Add rule for custom class - replace transparent bg with white
    smartInvertSheet.insertRule(".TransToWhite987 {background-color: white !important}", 0);

    // Disable invert filter for images
    var imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.filter = "invert(100%)";
    }

    // Disable invert filter for videos
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