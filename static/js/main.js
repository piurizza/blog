var back_top_button = document.getElementById("backbtn");

if (back_top_button) {
    window.onscroll = function() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            back_top_button.style.display = "block";
        } else {
            back_top_button.style.display = "none";
        }
    };
}

function Scrollback_topfunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
