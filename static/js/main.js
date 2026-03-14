// Mobile nav toggle
(function() {
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function() {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('open');
        menu.setAttribute('aria-hidden', expanded ? 'true' : 'false');
    });
})();

// Back to top button
(function() {
    var btn = document.getElementById('backbtn');
    if (!btn) return;

    btn.hidden = false;
    btn.style.display = 'none';

    window.addEventListener('scroll', function() {
        btn.style.display = (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) ? 'block' : 'none';
    });

    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// Theme toggle
(function() {
    var toggle = document.getElementById('theme-toggle');
    var icon = document.getElementById('theme-icon');
    if (!toggle || !icon) return;

    function updateIcon() {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        icon.className = isDark ? 'fa fa-sun-o' : 'fa fa-moon-o';
        toggle.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
        toggle.setAttribute('aria-pressed', isDark);
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
