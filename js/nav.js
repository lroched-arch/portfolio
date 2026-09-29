// nav.js — selector de tema claro/oscuro y enlace activo del menú según el scroll

(function () {
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');

  function getStored() {
    try { return localStorage.getItem('portfolio-theme-v2'); } catch (e) { return null; }
  }
  function setStored(v) {
    try { localStorage.setItem('portfolio-theme-v2', v); } catch (e) {}
  }
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
    if (btn) btn.textContent = theme === 'light' ? '☀' : '☾';
  }

  var stored = getStored();
  applyTheme(stored === 'light' ? 'light' : 'dark');

  if (btn) {
    btn.addEventListener('click', function () {
      var isLight = root.getAttribute('data-theme') === 'light';
      var next = isLight ? 'dark' : 'light';
      applyTheme(next);
      setStored(next);
    });
  }

  // Enlace activo del menú según la sección visible
  var sections = document.querySelectorAll('main section[id]');
  var links = document.querySelectorAll('#navLinks a');
  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }
})();
