function turnOn() {
    document.body.style.filter = "invert(100%)";

    consoleOut();
}

function consoleOut() {
    console.log("ON");
}

turnOn();
consoleOut();