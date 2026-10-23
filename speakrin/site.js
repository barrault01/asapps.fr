(function () {
  var button = document.querySelector('[data-theme-toggle]');
  if (!button) return;
  function updateLabel() {
    var dark = document.documentElement.getAttribute('data-theme') !== 'light';
    button.setAttribute('aria-label', dark ? button.dataset.lightLabel : button.dataset.darkLabel);
    button.setAttribute('aria-pressed', String(dark));
  }
  button.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (_) {}
    updateLabel();
  });
  updateLabel();
})();
