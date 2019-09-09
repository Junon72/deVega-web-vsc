/* navbar toggler behaviour - from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_right */
function navToggle() {
    document.getElementById("collapseMenu").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('navbar-toggler')) {
        var dropdowns = document.getElementsByClassName("navbar-collapse");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}