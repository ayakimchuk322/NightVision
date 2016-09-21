/*Global flag for all modes*/
var currentMethod = "off";

/*Listeners for img - 'buttons'*/
document.getElementById("invert").addEventListener("click", invert);
document.getElementById("smartInvert").addEventListener("click", smartInvert);

function invert() {
    if (currentMethod != "invert") {
        self.port.emit("invertM", "invert-turn-on.js");

        currentMethod = "invert";
    } else {
        self.port.emit("invertM", "invert-turn-off.js");

        currentMethod = "off";
    }
}

function smartInvert() {
    if (currentMethod != "smartinvert") {
        self.port.emit("invertM", "smart-invert-turn-on.js");

        currentMethod = "smartinvert";
    } else {
        self.port.emit("invertM", "smart-invert-turn-off.js");

        currentMethod = "off";
    }
}