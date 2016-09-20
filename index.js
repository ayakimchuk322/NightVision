var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var isEnabled = false;

var button = buttons.ActionButton({
    id: "nightvision-main-button",
    label: "Toggle Night Vision",
    // TODO create and add generic icons
    icon: {
        "16": "./icon-16.png",
        "32": "./icon-32.png",
        "64": "./icon-64.png"
    },
    onClick: toggleNightVision
});

function toggleNightVision() {
    // TODO add icon change depending on NV state (on/off)
    if (isEnabled) {
        require("sdk/tabs").activeTab.attach({
            contentScriptFile: self.data.url("turn-off.js")
        });

        isEnabled = false;
    } else {
        require("sdk/tabs").activeTab.attach({
            contentScriptFile: self.data.url("turn-on.js")
        });

        isEnabled = true;
    }
}