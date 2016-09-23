/*Global flag for all modes*/
var currentMode = "off";

/*Listeners for img - 'buttons'*/
document.getElementById("invert").addEventListener("click", invert);
document.getElementById("smartInvert").addEventListener("click", smartInvert);

function invert() {
    if (currentMode != "invert") {
        self.port.emit("invertM", "invert-turn-on.js");

        currentMode = "invert";
    } else {
        self.port.emit("invertM", "invert-turn-off.js");

        currentMode = "off";
    }
}

function smartInvert() {
    if (currentMode != "smartinvert") {
        self.port.emit("invertM", "smart-invert-turn-on.js");

        currentMode = "smartinvert";
    } else {
        self.port.emit("invertM", "smart-invert-turn-off.js");

        currentMode = "off";
    }
}