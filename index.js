// TODO add different night modes

/*Firefox SDK imports*/
var buttons = require('sdk/ui/button/action');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var toggle = require('sdk/ui/button/toggle');

var currentMethod = "off";

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
panel.port.on("invertM", function (panelmethod) {
    /*Apply method script to all opened tabs*/
    currentMethod = panelmethod;

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].attach({
            contentScriptFile: self.data.url(panelmethod)
        });
    }
});

tabs.on('open', applyToNewTab);
tabs.on("activate", applyToNewTab);
tabs.on("pageshow", applyToNewTab);

function applyToNewTab() {
    if (currentMethod != "off") {
        tabs.activeTab.attach({
            contentScriptFile: self.data.url(currentMethod)
        });
    }
}