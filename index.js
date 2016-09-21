// TODO add different night modes
// TODO documentation comments
// TODO add style to panel
// TODO add icons to panel

var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var toggle = require('sdk/ui/button/toggle');

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

var panel = panels.Panel({
    contentURL: self.data.url("panel.html"),
    contentScriptFile: self.data.url("panel-buttons.js"),
    onHide: handleHide
});

panel.width = 200;

function handleChange(state) {
    if (state.checked) {
        panel.show({
            position: button
        });
    }
}

function handleHide() {
    button.state('window', {checked: false});
}


panel.port.on("invertM", function (panelmethod) {
    tabs.activeTab.attach({
        contentScriptFile: self.data.url(panelmethod)
    });
});