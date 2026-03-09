# Congressional App Challenge Showcase

A showcase of apps built by high schoolers for the [Congressional App Challenge](https://www.congressionalappchallenge.us/), powered by [Hack Club](https://hackclub.com).

Each participant gets their own custom HTML page to show off who they are, what they built, and a demo of their app. All pages are connected through a central landing page with an interactive map and keyboard navigation.

## Features

- Landing page with a gallery of all projects and an interactive map
- One custom HTML page per participant — total creative freedom
- Arrow key navigation between project pages
- Map showing where participants are from
- Simple contribution workflow via pull requests

## Tech Stack

- Pure HTML, CSS, and JavaScript — no build step
- [Leaflet.js](https://leafletjs.com/) for the interactive map (loaded from CDN)
- Hosted on GitHub Pages

## Add Your Project

Participated in the Congressional App Challenge? **[Add your page to the showcase!](CONTRIBUTING.md)**

1. Fork this repo
2. Copy the `template/` folder to `sites/your-name/`
3. Customize your page
4. Add your entry to `projects.json`
5. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

## Local Development

```bash
# Clone the repo
git clone https://github.com/hackclub/Congressional-Showcase.git
cd Congressional-Showcase

# Start a local server
npx serve .
# or
python3 -m http.server 8000
```

Open `http://localhost:3000` (or `http://localhost:8000` for Python).

## Project Structure

```
├── index.html          Landing page
├── projects.json       Participant metadata
├── assets/
│   ├── css/            Shared stylesheets
│   ├── js/             Gallery, map, and navigation scripts
│   └── images/         Shared images
├── template/           Starter files for new contributors
└── sites/              One folder per participant
    └── jane-doe/       Example participant page
```

## License

MIT
