function turnOn() {

    // Apply invert filter
    document.documentElement.style.filter = "invert(100%)";

    // Mark elements with custom class - those with transparent bg
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        var bg = window.getComputedStyle(allElements[i]).getPropertyValue("background-color");

        if (bg == "transparent") {
            allElements[i].classList.add("TransToWhite987");
        }
    }

    // Create stylesheet
    var invertStyle = document.createElement("style");
    var invertStyleId = document.createAttribute("id");
    invertStyleId.value = "invertstyleid987";
    invertStyle.setAttributeNode(invertStyleId);
    document.head.appendChild(invertStyle);

    var invertSheet = invertStyle.sheet;

    // Add rule for custom class - replace transparent bg with white
    invertSheet.insertRule(".TransToWhite987 {background-color: white !important}", 0);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - invert mode ON]");
}

turnOn();