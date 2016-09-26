function turnOn() {

    document.documentElement.style.filter = "invert(100%)";

    var invertStyle = document.createElement("style");
    var invertStyleId = document.createAttribute("id");
    invertStyleId.value = "invertstyleid";
    invertStyle.setAttributeNode(invertStyleId);
    document.head.appendChild(invertStyle);

    var invertSheet = invertStyle.sheet;

    invertSheet.insertRule("* {background-color: white !important}", 0);
    invertSheet.insertRule("body {background-color: white !important}", 0);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - invert mode ON]");
}

turnOn();