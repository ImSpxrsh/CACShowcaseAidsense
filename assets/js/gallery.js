/* Gallery — renders project cards from projects.json */
(function () {
  var container = document.getElementById('gallery-container');
  if (!container) return;

  fetch('./projects.json')
    .then(function (res) { return res.json(); })
    .then(function (projects) {
      if (!Array.isArray(projects) || projects.length === 0) {
        var empty = document.createElement('div');
        empty.className = 'gallery-empty';
        empty.textContent = 'No projects yet \u2014 be the first contributor!';
        container.appendChild(empty);
        return;
      }

      projects.forEach(function (project) {
        if (!project.slug) return;

        var card = document.createElement('a');
        card.className = 'project-card';
        card.href = 'sites/' + project.slug + '/';

        var img = document.createElement('img');
        img.src = project.thumbnail || 'assets/images/placeholder.svg';
        img.alt = (project.appName || project.name) + ' thumbnail';
        img.onerror = function () { this.src = 'assets/images/placeholder.svg'; };

        var body = document.createElement('div');
        body.className = 'card-body';

        var name = document.createElement('h3');
        name.textContent = project.name || 'Unknown';

        var appName = document.createElement('div');
        appName.className = 'app-name';
        appName.textContent = project.appName || '';

        var desc = document.createElement('div');
        desc.className = 'description';
        desc.textContent = project.description || '';

        var location = document.createElement('span');
        location.className = 'location-label';
        location.textContent = (project.location && project.location.label) || '';

        body.appendChild(name);
        if (project.appName) body.appendChild(appName);
        if (project.description) body.appendChild(desc);
        if (project.location && project.location.label) body.appendChild(location);

        card.appendChild(img);
        card.appendChild(body);
        container.appendChild(card);
      });
    })
    .catch(function () {
      var error = document.createElement('div');
      error.className = 'gallery-empty';
      error.textContent = 'Could not load projects.';
      container.appendChild(error);
    });
})();
