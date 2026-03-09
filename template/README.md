# Participant Page Template

This is your starter template. Follow these steps to create your showcase page.

## Quick Start

1. Copy this entire `template/` folder to `sites/your-name/` (use lowercase, hyphens for spaces)
2. Open `index.html` and fill in all the `TODO` sections
3. Add your entry to `projects.json` in the root of the repo
4. Test locally with a web server (see below)
5. Submit a pull request

## Customization Tips

- **Styles**: Edit the `<style>` block in `index.html` to completely change the look and feel
- **Colors**: Use the Hack Club CSS variables (`var(--hc-red)`, `var(--hc-green)`, etc.) or your own colors
- **Layout**: The template is just a starting point — restructure the HTML however you want
- **Images**: Create an `assets/` subfolder in your page directory for images
- **Video**: Use a YouTube or Vimeo embed (don't commit video files to the repo)

## Important

- **Don't remove** the `<script>` tag at the bottom — it enables arrow key navigation
- **Don't remove** the `shared.css` link — it styles the navigation arrows
- **Don't edit** files outside your own folder (except adding your entry to `projects.json`)

## Testing Locally

You need a local web server because the navigation script uses `fetch()`. From the **repo root**:

```bash
# Option 1: Node.js
npx serve .

# Option 2: Python
python3 -m http.server 8000

# Option 3: Python 2
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:3000/sites/your-name/` (or port 8000 for Python).
