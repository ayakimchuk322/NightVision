/*Firefox SDK imports*/
var buttons = require("sdk/ui/button/action");
var mod = require('sdk/content/mod');
var panels = require("sdk/panel");
var self = require("sdk/self");
var style = require('sdk/stylesheet/style');
var tabs = require("sdk/tabs");
var toggle = require("sdk/ui/button/toggle");

var currentMode = "off";
var newMode;

/*Add-on menu button*/
var button = toggle.ToggleButton({
    id: "nightvision-menu-button",
    label: "Open NightVision menu",
    icon: {
        "16": "./icons/icon-off-16.png",
        "32": "./icons/icon-off-32.png",
        "64": "./icons/icon-off-64.png"
    },
    onChange: handleChange
});

/*Update removeClasses-on button icon on on/off*/
function updateButtonIcon() {
    if (currentMode != "off") {
        button.icon = {
            "16": "./icons/icon-on-16.png",
            "32": "./icons/icon-on-32.png",
            "64": "./icons/icon-on-64.png"
        }
    } else {
        button.icon = {
            "16": "./icons/icon-off-16.png",
            "32": "./icons/icon-off-32.png",
            "64": "./icons/icon-off-64.png"
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
        require("sdk/view/core").getActiveView(panel)
            .setAttribute("tooltip", "aHTMLTooltip");
    }
}

/*Panel hide*/
function handleHide() {
    button.state("window", {checked: false});
}

/*Get user click from panel and apply night mode to all opened tabs*/
panel.port.on("mode", function (mode) {
    newMode = mode;

    if (currentMode == "off") {
        var sheet = style.Style({
            uri: "./sheets/" + newMode + ".css"
        });

        // First, process active tab
        tabs.activeTab.attach({
            contentScriptFile: self.data.url("./js/addclasses.js")
        });
        mod.attach(sheet, tabs.activeTab);

        // Process all tabs
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].attach({
                contentScriptFile: self.data.url("./js/addclasses.js")
            });
            mod.attach(sheet, tabs[i]);
        }

        currentMode = newMode;
    } else {
        var currentSheet = style.Style({
            uri: "./sheets/" + currentMode + ".css"
        });

        // First, process active tab
        mod.detach(currentSheet, tabs.activeTab);
        tabs.activeTab.attach({
            contentScriptFile: self.data.url("./js/removeclasses.js")
        });

        // Process all tabs
        for (var i = 0; i < tabs.length; i++) {
            mod.detach(currentSheet, tabs[i]);
            tabs[i].attach({
                contentScriptFile: self.data.url("./js/removeclasses.js")
            });
        }

        if (currentMode == newMode) {
            currentMode = "off";
        } else {
            var sheet = style.Style({
                uri: "./sheets/" + newMode + ".css"
            });

            // First, process active tab
            tabs.activeTab.attach({
                contentScriptFile: self.data.url("./js/addclasses.js")
            });
            mod.attach(sheet, tabs.activeTab);

            // Process all tabs
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].attach({
                    contentScriptFile: self.data.url("./js/addclasses.js")
                });
                mod.attach(sheet, tabs[i]);
            }

            currentMode = newMode;
        }
    }

    updateButtonIcon();
});

/*Apply night mode to newly opened tab*/
tabs.on("ready", applyToNewTab);
tabs.on("activate", applyToNewTab);

function applyToNewTab() {
    if (currentMode != "off") {
        var currentSheet = style.Style({
            uri: "./sheets/" + currentMode + ".css"
        });

        tabs.activeTab.attach({
            contentScriptFile: self.data.url("./js/addclasses.js")
        });
        mod.attach(currentSheet, tabs.activeTab);
    }
}

/*Revert pages when add-on disabled or uninstalled*/
exports.onUnload = function (reason) {
    // If mode is off, do nothing
    if (currentMode != "off") {
        var currentSheet = style.Style({
            uri: "./sheets/" + currentMode + ".css"
        });

        for (var i = 0; i < tabs.length; i++) {
            mod.detach(currentSheet, tabs[i]);
            tabs[i].attach({
                contentScriptFile: self.data.url("./js/removeclasses.js")
            });
        }
    }
}