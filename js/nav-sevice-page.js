$(document).ready(function() {

    $(window).scroll(function() {
        if (window.pageYOffset > 70) {
            document.getElementById("navhide").hidden = false;
        } else {
            document.getElementById("navhide").hidden = true;
        }
    });
}); 