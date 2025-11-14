# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Add Your Resume
- Place your resume PDF in the `assets/` folder
- Name it `resume.pdf`

### 2. Preview Locally
- Open `index.html` in your browser, or
- Run a local server: `python -m http.server 8000`

### 3. Deploy to GitHub Pages
- Push to GitHub
- Enable Pages in Settings → Pages
- Select `main` branch and `/` folder
- Your site is live!

## 📝 Content to Customize

### In `index.html`:
- Update contact information in About section
- Modify hero summary text
- Adjust section content as needed

### In `scripts.js`:
- Update `projects` array with your actual project links
- Change `codeUrl` and `liveUrl` to your GitHub repos and live demos
- Add/remove project filter tags as needed

### In `styles.css`:
- Modify CSS variables for colors
- Adjust spacing, fonts, or design elements

## 🎨 Design Customization

**Primary Colors** (in `styles.css`):
- Teal accent: `#20c997`
- Blue accent: `#17a2b8`

**Fonts**:
- Body: Inter
- Headings: Poppins

Change these in the CSS variables section at the top of `styles.css`.

## 📸 Adding Images

1. Add project screenshots to `assets/` folder:
   - `project-rpg.jpg`
   - `project-taskmanager.jpg`
   - `project-agecalculator.jpg`

2. The website will automatically use them when you add the files.

## ✅ Checklist Before Deploying

- [ ] Added resume.pdf to assets folder
- [ ] Updated project links in scripts.js
- [ ] Added project screenshots (optional)
- [ ] Tested locally in browser
- [ ] Verified all links work
- [ ] Checked mobile responsiveness
- [ ] Tested light/dark mode toggle

## 🔗 Important Links to Update

In `scripts.js`, update these for each project:
- `codeUrl`: Your GitHub repository URL
- `liveUrl`: Your live demo URL (if available)

Example:
```javascript
{
    codeUrl: 'https://github.com/yourusername/project-name',
    liveUrl: 'https://yourproject.netlify.app'
}
```

---

**Need help?** Check the main `README.md` for detailed instructions.

