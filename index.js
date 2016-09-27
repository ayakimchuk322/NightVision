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
        "16": "./icon16.png",
        "32": "./icon32.png",
        "64": "./icon64.png"
    },
    onChange: handleChange
});

/*Add-on panel*/
var panel = panels.Panel({
    contentURL: self.data.url("panel.html"),
    contentScriptFile: self.data.url("panel-buttons.js"),
    onHide: handleHide
});

/*Panel width in px*/
// TODO add height
panel.width = 200;

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