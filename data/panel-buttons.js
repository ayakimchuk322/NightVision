var isEnabled = false;

document.getElementById("invert").addEventListener("click", invert);

function invert() {
    if (isEnabled) {
        self.port.emit("invertM", "invert-turn-off.js");

        isEnabled = false;
    } else {
        self.port.emit("invertM", "invert-turn-on.js");

        isEnabled = true;
    }
}