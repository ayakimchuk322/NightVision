/*Firefox SDK imports*/
var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var toggle = require('sdk/ui/button/toggle');

var isEnabled = false;
var currentMode;
var newMode;

/*Add-on menu button*/
var button = toggle.ToggleButton({
    id: "nightvision-menu-button",
    label: "Open NightVision menu",
    icon: {
        "16": "./icon-off-16.png",
        "32": "./icon-off-32.png",
        "64": "./icon-off-64.png"
    },
    onChange: handleChange
});

/*Update add-on button icon on on/off*/
function updateButtonIcon() {
    if (isEnabled) {
        button.icon = {
            "16": "./icon-on-16.png",
            "32": "./icon-on-32.png",
            "64": "./icon-on-64.png"
        }
    } else {
        button.icon = {
            "16": "./icon-off-16.png",
            "32": "./icon-off-32.png",
            "64": "./icon-off-64.png"
        }
    }
}

/*Add-on panel*/
var panel = panels.Panel({
    contentURL: self.data.url("panel.html"),
    contentScriptFile: self.data.url("panel-buttons.js"),
    onHide: handleHide
});

/*Panel size in px*/
panel.width = 196;
panel.height = 238;

/*Panel show*/
function handleChange(state) {
    if (state.checked) {
        panel.show({
            position: button
        });

        /*Enable tooltips (title attribute) inside panel*/
        require('sdk/view/core').getActiveView(panel)
            .setAttribute('tooltip', 'aHTMLTooltip');
    }
}

/*Panel hide*/
function handleHide() {
    button.state('window', {checked: false});
}

/*Get user click from panel*/
panel.port.on("invertM", function (mode) {
    /*Apply method script to all opened tabs*/

    newMode = mode;

    if (!isEnabled) {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].attach({
                contentScriptFile: self.data.url(newMode)
            });
        }

        currentMode = newMode;
        isEnabled = true;
    } else {
        if (currentMode != undefined) {
            var currentModeOff = currentMode.replace("turn-on", "turn-off");

            for (var i = 0; i < tabs.length; i++) {
                tabs[i].attach({
                    contentScriptFile: self.data.url(currentModeOff)
                });
            }
        }

        if (newMode.indexOf("turn-on") != -1) {
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].attach({
                    contentScriptFile: self.data.url(newMode)
                });
            }

            currentMode = newMode;
        } else {
            isEnabled = false;
        }
    }

    updateButtonIcon();
});

/*Apply method script to newly opened tab*/
tabs.on("ready", applyToNewTab);
tabs.on("activate", applyToNewTab);

function applyToNewTab() {
    if (newMode != "off") {
        tabs.activeTab.attach({
            contentScriptFile: self.data.url(newMode)
        });
    }
}