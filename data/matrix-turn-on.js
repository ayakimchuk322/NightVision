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

    var matrixStyle = document.createElement("style");
    var matrixStyleId = document.createAttribute("id");
    matrixStyleId.value = "matrixstyleid";
    matrixStyle.setAttributeNode(matrixStyleId);
    document.head.appendChild(matrixStyle);

    var matrixSheet = matrixStyle.sheet;

    matrixSheet.insertRule(".ToBlack987 {background-color: black !important}", 0);
    matrixSheet.insertRule("* {color: green !important}", 0);
    matrixSheet.insertRule("* {border-color: green; !important}", 0);
    matrixSheet.insertRule("* {border-top-color: green; !important}", 0);
    matrixSheet.insertRule("* {border-right-color: green; !important}", 0);
    matrixSheet.insertRule("* {border-bottom-color: green; !important}", 0);
    matrixSheet.insertRule("* {border-left-color: green; !important}", 0);
    matrixSheet.insertRule("* {outline: aqua; !important}", 0);
    matrixSheet.insertRule("* {box-shadow: aqua; !important}", 0);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - matrix mode ON]");
}

turnOn();