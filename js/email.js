(function () {
  function encodeSubject(subject) {
    return subject ? '?subject=' + encodeURIComponent(subject) : '';
  }

  document.querySelectorAll('[data-email-user][data-email-domain]').forEach(function (link) {
    var user = link.getAttribute('data-email-user');
    var domain = link.getAttribute('data-email-domain');
    var subject = link.getAttribute('data-email-subject') || '';
    if (!user || !domain) return;

    link.setAttribute('href', 'mailto:' + user + '@' + domain + encodeSubject(subject));
  });
})();
