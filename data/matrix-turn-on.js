function turnOn() {

    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        allElements[i].style.removeProperty("backgroundColor");
        allElements[i].style.removeProperty("color");
    }

    var matrixStyle = document.createElement("style");
    var matrixStyleId = document.createAttribute("id");
    matrixStyleId.value = "matrixstyleid";
    matrixStyle.setAttributeNode(matrixStyleId);
    document.head.appendChild(matrixStyle);

    var matrixSheet = matrixStyle.sheet;

    matrixSheet.insertRule("* {background-color: black !important}", 0);
    matrixSheet.insertRule("body {background-color: black !important}", 0);
    matrixSheet.insertRule("* {color: green !important}", 0);
    matrixSheet.insertRule("body {color: green !important}", 0);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - matrix mode ON]");
}

turnOn();