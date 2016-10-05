/*Remove added custom classes*/
function removeClasses() {
    var allElements = document.getElementsByTagName("*");

    for (var i = 0; i < allElements.length; i++) {
        allElements[i].classList.remove("Trans987");
        allElements[i].classList.remove("NonTrans987");
    }
}

removeClasses();