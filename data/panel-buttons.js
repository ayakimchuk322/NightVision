/*Global flag for all modes*/
var currentMode = "off";

/*Listeners for img - 'buttons'*/
document.getElementById("invert").addEventListener("click", invert);
document.getElementById("smart").addEventListener("click", smart);
document.getElementById("green").addEventListener("click", green);
document.getElementById("aqua").addEventListener("click", aqua);
document.getElementById("red").addEventListener("click", red);


function invert() {
    if (currentMode != "invert") {
        self.port.emit("invertM", "invert-turn-on.js");

        currentMode = "invert";
    } else {
        self.port.emit("invertM", "invert-turn-off.js");

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

function green() {
    if (currentMode != "green") {
        self.port.emit("invertM", "green-turn-on.js");

        currentMode = "green";
    } else {
        self.port.emit("invertM", "green-turn-off.js");

        currentMode = "off";
    }
}

function aqua() {
    if (currentMode != "aqua") {
        self.port.emit("invertM", "aqua-turn-on.js");

        currentMode = "aqua";
    } else {
        self.port.emit("invertM", "aqua-turn-off.js");

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