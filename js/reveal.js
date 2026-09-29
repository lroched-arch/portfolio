// reveal.js — animación de aparición de las secciones al hacer scroll (IntersectionObserver)

(function () {
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Sin soporte de IntersectionObserver: mostrar todo directamente
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }
})();