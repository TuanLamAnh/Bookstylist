$(document).ready(function() {

    $(window).scroll(function() {
        if (window.pageYOffset > 400) {
            document.getElementById("navhide").hidden = false;
        } else {
            document.getElementById("navhide").hidden = true;
        }
    });
});

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("Menu").style.top = "0";
    } else {
        document.getElementById("Menu").style.top = "-150px";
    }
}