function turnOn() {

    // Apply brightness filter
    document.documentElement.style.filter = "brightness(75%)";

    // Mark elements with custom class - those with non-transparent bg
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        var bg = window.getComputedStyle(allElements[i]).getPropertyValue("background-color");

        if (bg != "transparent") {
            allElements[i].classList.add("ToBlack987");
        }
    }

    var highStyle = document.createElement("style");
    var highStyleId = document.createAttribute("id");
    highStyleId.value = "highstyleid";
    highStyle.setAttributeNode(highStyleId);
    document.head.appendChild(highStyle);

    var highSheet = highStyle.sheet;

    highSheet.insertRule(".ToBlack987 {background-color: black !important}", 0);
    highSheet.insertRule("* {color: aqua !important}", 0);
    highSheet.insertRule("* {border-color: aqua; !important}", 0);
    highSheet.insertRule("* {border-top-color: aqua; !important}", 0);
    highSheet.insertRule("* {border-right-color: aqua; !important}", 0);
    highSheet.insertRule("* {border-bottom-color: aqua; !important}", 0);
    highSheet.insertRule("* {border-left-color: aqua; !important}", 0);
    highSheet.insertRule("* {outline: aqua; !important}", 0);
    highSheet.insertRule("* {box-shadow: aqua; !important}", 0);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - high contrast mode ON]");
}

turnOn();