/* Keyboard and button navigation between participant pages */
(function () {
  var scriptTag = document.querySelector('script[data-root]');
  var root = scriptTag ? scriptTag.getAttribute('data-root') : './';
  if (!root.endsWith('/')) root += '/';

  fetch(root + 'projects.json')
    .then(function (res) { return res.json(); })
    .then(function (projects) {
      if (!Array.isArray(projects) || projects.length === 0) return;

      // Determine current page slug from URL
      var path = window.location.pathname;
      var match = path.match(/\/sites\/([^/]+)/);
      var currentSlug = match ? match[1] : null;

      var currentIndex = -1; // -1 = landing page
      if (currentSlug) {
        for (var i = 0; i < projects.length; i++) {
          if (projects[i].slug === currentSlug) {
            currentIndex = i;
            break;
          }
        }
        // Slug not found in projects.json — don't show nav
        if (currentIndex === -1) return;
      }

      // Compute prev/next URLs
      var prevUrl, nextUrl;
      if (currentSlug === null) {
        // On landing page
        prevUrl = root + 'sites/' + projects[projects.length - 1].slug + '/';
        nextUrl = root + 'sites/' + projects[0].slug + '/';
      } else {
        prevUrl = currentIndex === 0
          ? root
          : root + 'sites/' + projects[currentIndex - 1].slug + '/';
        nextUrl = currentIndex === projects.length - 1
          ? root
          : root + 'sites/' + projects[currentIndex + 1].slug + '/';
      }

      // Inject arrow buttons
      var prevArrow = document.createElement('a');
      prevArrow.className = 'nav-arrow prev';
      prevArrow.href = prevUrl;
      prevArrow.setAttribute('aria-label', 'Previous page');
      prevArrow.textContent = '\u2190';

      var nextArrow = document.createElement('a');
      nextArrow.className = 'nav-arrow next';
      nextArrow.href = nextUrl;
      nextArrow.setAttribute('aria-label', 'Next page');
      nextArrow.textContent = '\u2192';

      document.body.appendChild(prevArrow);
      document.body.appendChild(nextArrow);

      // Keyboard navigation
      document.addEventListener('keydown', function (e) {
        // Don't hijack input fields
        var tag = document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        if (document.activeElement.isContentEditable) return;

        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          window.location.assign(prevUrl);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          window.location.assign(nextUrl);
        } else if (e.key === 'Escape' && currentSlug !== null) {
          e.preventDefault();
          window.location.assign(root);
        }
      });
    })
    .catch(function () {
      // projects.json failed to load — silently skip navigation
    });
})();
