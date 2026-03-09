# Contributing to the Congressional App Challenge Showcase

Thanks for adding your project! Follow these steps to create your page and get it on the showcase.

## Step 1: Fork & Clone

```bash
# Fork this repo on GitHub, then:
git clone https://github.com/YOUR_USERNAME/Congressional-Showcase.git
cd Congressional-Showcase
```

## Step 2: Create Your Page

Copy the template folder to a new folder under `sites/`:

```bash
cp -r template sites/your-name
```

Use **lowercase letters and hyphens** for your folder name (e.g., `jane-doe`, `alex-kim`).

## Step 3: Customize Your Page

Open `sites/your-name/index.html` and fill in all the `TODO` sections:

- Your name and bio
- Your app name and description
- Your demo video (YouTube/Vimeo embed)
- Any relevant links

Make it yours — change colors, fonts, layout, add images. The only rules:

- **Keep** the `<link>` to `../../assets/css/shared.css`
- **Keep** the `<script>` tag for `../../assets/js/nav.js` at the bottom
- **Don't commit video files** — use YouTube or Vimeo embeds instead

## Step 4: Add Your Entry to projects.json

Open `projects.json` in the repo root and add your entry **at the end of the array** (before the closing `]`):

```json
{
  "slug": "your-name",
  "name": "Your Full Name",
  "appName": "Your App Name",
  "description": "A one-sentence description of your app.",
  "thumbnail": "sites/your-name/thumbnail.png",
  "location": {
    "lat": 40.7128,
    "lng": -74.0060,
    "label": "New York, NY"
  },
  "district": "NY-10",
  "state": "NY",
  "tags": ["category1", "category2"]
}
```

**Field guide:**
| Field | Required | Description |
|-------|----------|-------------|
| `slug` | Yes | Must match your folder name under `sites/` |
| `name` | Yes | Your full name |
| `appName` | Yes | The name of your app |
| `description` | Yes | One sentence about your app |
| `thumbnail` | No | Path to a 600x400 image (PNG or JPG) |
| `location.lat` | Yes | Latitude of your city ([find it here](https://www.latlong.net/)) |
| `location.lng` | Yes | Longitude of your city |
| `location.label` | Yes | City and state (e.g., "Austin, TX") |
| `district` | No | Your congressional district (e.g., "CA-12") |
| `state` | No | Two-letter state code |
| `tags` | No | Categories for your app |

## Step 5: Test Locally

Start a local server from the repo root:

```bash
npx serve .
```

Then check:
- [ ] Your page loads at `http://localhost:3000/sites/your-name/`
- [ ] The landing page shows your card in the gallery
- [ ] Your location shows on the map
- [ ] Arrow key navigation works on your page
- [ ] The "Back to Showcase" link works

## Step 6: Submit a Pull Request

```bash
git add sites/your-name/ projects.json
git commit -m "Add Your Name - App Name"
git push origin main
```

Then open a pull request on GitHub with the title: **Add [Your Name] - [App Name]**

## Guidelines

- Only add/edit files in your own `sites/your-name/` folder
- Don't modify shared assets, other people's pages, or `index.html`
- Keep your total file size under 5MB (use external video hosting)
- Make sure your `projects.json` entry is valid JSON (no trailing commas!)
- Be creative with your page — that's the whole point!

## Need Help?

- Check out the [example page](sites/jane-doe/) for reference
- Look at the [template README](template/README.md) for customization tips
- Open an issue if you're stuck
