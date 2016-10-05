/*Mark elements with custom classes*/
function addClasses() {
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        var bg = window.getComputedStyle(allElements[i]).getPropertyValue("background-color");

        if (bg == "transparent") {
            allElements[i].classList.add("Trans987");
        } else {
            allElements[i].classList.add("NonTrans987");

        }
    }
}

addClasses();