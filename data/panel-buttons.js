/*Global flag for all modes*/
var currentMode = "off";

/*Listeners for img - 'buttons'*/
document.getElementById("high").addEventListener("click", high);
document.getElementById("invert").addEventListener("click", invert);
document.getElementById("matrix").addEventListener("click", matrix);
document.getElementById("red").addEventListener("click", red);
document.getElementById("smart").addEventListener("click", smart);

function high() {
    if (currentMode != "high") {
        self.port.emit("invertM", "high-turn-on.js");

        currentMode = "high";
    } else {
        self.port.emit("invertM", "high-turn-off.js");

        currentMode = "off";
    }
}

function invert() {
    if (currentMode != "invert") {
        self.port.emit("invertM", "invert-turn-on.js");

        currentMode = "invert";
    } else {
        self.port.emit("invertM", "invert-turn-off.js");

        currentMode = "off";
    }
}

function matrix() {
    if (currentMode != "matrix") {
        self.port.emit("invertM", "matrix-turn-on.js");

        currentMode = "matrix";
    } else {
        self.port.emit("invertM", "matrix-turn-off.js");

        currentMode = "off";
    }
}

function red() {
    if (currentMode != "red") {
        self.port.emit("invertM", "red-turn-on.js");

        currentMode = "red";
    } else {
        self.port.emit("invertM", "red-turn-off.js");

        currentMode = "off";
    }
}

function smart() {
    if (currentMode != "smartinvert") {
        self.port.emit("invertM", "smart-invert-turn-on.js");

        currentMode = "smartinvert";
    } else {
        self.port.emit("invertM", "smart-invert-turn-off.js");

        currentMode = "off";
    }
}