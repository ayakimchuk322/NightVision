function turnOn() {
    var matrixStyle = document.createElement("style");
    var matrixStyleId = document.createAttribute("id");
    matrixStyleId.value = "matrixstyleid";
    matrixStyle.setAttributeNode(matrixStyleId);
    document.head.appendChild(matrixStyle);

    var matrixSheet = matrixStyle.sheet;

    matrixSheet.insertRule("body {background-color: black}", 0);
    matrixSheet.insertRule("body {color: green}", 1);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - matrix mode ON]");
}

turnOn();