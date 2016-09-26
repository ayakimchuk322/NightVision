function turnOn() {

    var matrixStyle = document.createElement("style");
    var matrixStyleId = document.createAttribute("id");
    matrixStyleId.value = "matrixstyleid";
    matrixStyle.setAttributeNode(matrixStyleId);
    document.head.appendChild(matrixStyle);

    var matrixSheet = matrixStyle.sheet;

    matrixSheet.insertRule("* {background-color: black !important}", 0);
    matrixSheet.insertRule("* {color: green !important}", 0);
    matrixSheet.insertRule("* {border-color: green; !important}", 0);
    matrixSheet.insertRule("* {border-top-color: green; !important}", 0);
    matrixSheet.insertRule("* {border-right-color: green; !important}", 0);
    matrixSheet.insertRule("* {border-bottom-color: green; !important}", 0);
    matrixSheet.insertRule("* {border-left-color: green; !important}", 0);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - matrix mode ON]");
}

turnOn();