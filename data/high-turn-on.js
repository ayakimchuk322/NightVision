function turnOn() {

    var highStyle = document.createElement("style");
    var highStyleId = document.createAttribute("id");
    highStyleId.value = "highstyleid";
    highStyle.setAttributeNode(highStyleId);
    document.head.appendChild(highStyle);

    var highSheet = highStyle.sheet;

    highSheet.insertRule("* {background-color: black !important}", 0);
    highSheet.insertRule("* {color: aqua !important}", 0);
    highSheet.insertRule("* {border-color: aqua; !important}", 0);
    highSheet.insertRule("* {border-top-color: aqua; !important}", 0);
    highSheet.insertRule("* {border-right-color: aqua; !important}", 0);
    highSheet.insertRule("* {border-bottom-color: aqua; !important}", 0);
    highSheet.insertRule("* {border-left-color: aqua; !important}", 0);

    consoleOut();
}

function consoleOut() {
    console.log("[NightVision - high contrast mode ON]");
}

turnOn();