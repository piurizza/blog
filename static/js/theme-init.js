(function() {
    var saved = localStorage.getItem('theme');
    var isDark = saved !== 'light';
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
})();
