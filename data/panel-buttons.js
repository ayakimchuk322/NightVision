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
        self.port.emit("mode", "invert-on.js");

        currentMode = "invert";
    } else {
        self.port.emit("mode", "invert-off.js");

        currentMode = "off";
    }
}

function smart() {
    if (currentMode != "smart") {
        self.port.emit("mode", "smart-on.js");

        currentMode = "smart";
    } else {
        self.port.emit("mode", "smart-off.js");

        currentMode = "off";
    }
}

function green() {
    if (currentMode != "green") {
        self.port.emit("mode", "green-on.js");

        currentMode = "green";
    } else {
        self.port.emit("mode", "green-off.js");

        currentMode = "off";
    }
}

function aqua() {
    if (currentMode != "aqua") {
        self.port.emit("mode", "aqua-on.js");

        currentMode = "aqua";
    } else {
        self.port.emit("mode", "aqua-off.js");

        currentMode = "off";
    }
}

function red() {
    if (currentMode != "red") {
        self.port.emit("mode", "red-on.js");

        currentMode = "red";
    } else {
        self.port.emit("mode", "red-off.js");

        currentMode = "off";
    }
}