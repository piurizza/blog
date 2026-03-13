// Back to top button
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme toggle
(function() {
    var toggle = document.getElementById('theme-toggle');
    var icon = document.getElementById('theme-icon');
    if (!toggle || !icon) return;

    function updateIcon() {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        icon.className = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o';
        toggle.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    }

    updateIcon();

    toggle.addEventListener('click', function() {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateIcon();
    });
})();
