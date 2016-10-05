/*Listeners for img - 'buttons'*/
document.getElementById("invert").addEventListener("click", invert);
document.getElementById("smart").addEventListener("click", smart);
document.getElementById("green").addEventListener("click", green);
document.getElementById("aqua").addEventListener("click", aqua);
document.getElementById("red").addEventListener("click", red);


function invert() {
    self.port.emit("mode", "invert");
}

function smart() {
    self.port.emit("mode", "smart");
}

function green() {
    self.port.emit("mode", "green");
}

function aqua() {
    self.port.emit("mode", "aqua");
}

function red() {
    self.port.emit("mode", "red");
}