/*Global flag for all modes*/
var isEnabled = false;

/*Listeners for img - 'buttons'*/
document.getElementById("invert").addEventListener("click", invert);
document.getElementById("smartInvert").addEventListener("click", smartInvert);

function invert() {
    if (isEnabled) {
        self.port.emit("invertM", "invert-turn-off.js");

        isEnabled = false;
    } else {
        self.port.emit("invertM", "invert-turn-on.js");

        isEnabled = true;
    }
}

function smartInvert() {
    if (isEnabled) {
        self.port.emit("invertM", "smart-invert-turn-off.js");

        isEnabled = false;
    } else {
        self.port.emit("invertM", "smart-invert-turn-on.js");

        isEnabled = true;
    }
}