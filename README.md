# Pratap Kumar Das - Portfolio Website

A beautiful, responsive personal portfolio website built with semantic HTML, modern CSS, and vanilla JavaScript. Features a clean, modern design with glassmorphism effects, light/dark mode toggle, and smooth animations.

## 🌟 Features

- **Responsive Design**: Mobile-first approach, looks great from 320px to 1920px
- **Light/Dark Mode**: Toggle between themes with smooth transitions (saved to localStorage)
- **Glassmorphism Header**: Modern frosted glass effect on navigation
- **Smooth Animations**: Scroll-triggered skill bars, typed text effect, and smooth scrolling
- **Project Filter**: Filter projects by technology tags
- **Project Modal**: Detailed project view with screenshots and tech stack
- **Contact Form**: Client-side validation with mailto: integration
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation, focus indicators
- **Performance**: No build tools, pure static files, optimized for fast loading

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with semantic markup
├── styles.css          # All styles (variables, layout, components, responsive)
├── scripts.js          # All interactivity (theme, scroll, filter, modal, animations)
├── assets/             # Images and static assets
│   ├── README.md       # Instructions for adding images
│   └── resume.pdf      # Resume PDF (add your file here)
└── README.md           # This file
```

## 🚀 Quick Start

### Local Preview

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
   - Simply double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
3. **Navigate** to `http://localhost:8000` in your browser

### Adding Your Resume

1. Place your resume PDF in the `assets/` folder
2. Name it `resume.pdf` (or update the links in `index.html`)

### Adding Project Screenshots

1. Add your project screenshots to the `assets/` folder:
   - `project-rpg.jpg`
   - `project-taskmanager.jpg`
   - `project-agecalculator.jpg`
2. Update the image paths in `scripts.js` if using different filenames

## 📦 Deployment to GitHub Pages

### One-Click Deploy Steps

1. **Create a GitHub repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `portfolio` or `pratap-portfolio` (or any name you prefer)

2. **Upload your files**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial portfolio website"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

4. **Custom Domain (Optional)**
   - Add a `CNAME` file in the root with your domain name
   - Configure DNS settings as per GitHub Pages documentation

## 🎨 Customization

### Colors & Theme

Edit CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #20c997;    /* Primary accent color (teal) */
    --accent-secondary: #17a2b8;   /* Secondary accent color */
    --bg-primary: #f8f9fa;         /* Background color */
    --text-primary: #212529;       /* Primary text color */
    /* ... more variables */
}
```

### Typography

The site uses Google Fonts:
- **Body**: Inter
- **Headings**: Poppins

To change fonts, update the Google Fonts link in `index.html` and the CSS variables in `styles.css`.

### Content

All content is in `index.html`. Update:
- Personal information in the About section
- Experience, Education, Certifications
- Project details in `scripts.js` (projects array)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern CSS with variables, flexbox, grid, animations
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Google Fonts**: Inter & Poppins

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support (respects `prefers-reduced-motion`)
- Good color contrast ratios
- Screen reader friendly

## 📝 Content Sections

1. **Hero**: Introduction with typed text effect
2. **About**: Summary and contact information
3. **Experience**: Work history and roles
4. **Projects**: Portfolio projects with filter and modal
5. **Skills**: Technical skills with animated progress bars
6. **Education**: Academic background
7. **Certifications**: Professional certifications
8. **Achievements & Languages**: Accomplishments and language proficiency
9. **Contact**: Contact form with mailto: integration

## 🔧 JavaScript Features

- **Theme Toggle**: Light/dark mode with localStorage persistence
- **Smooth Scroll**: Navigation links scroll smoothly to sections
- **Project Filter**: Filter projects by technology tags
- **Project Modal**: Detailed project view on card click
- **Skill Animations**: Animated progress bars on scroll
- **Typed Effect**: Animated typing effect in hero section
- **Contact Form**: Client-side validation and mailto: handler
- **Mobile Menu**: Responsive navigation menu
- **Scroll to Top**: Button appears on scroll

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio.

## 👤 Author

**Pratap Kumar Das**
- Email: pratap.kumar.das@rcm.ac
- LinkedIn: [pratapkumar-das-085a67252](https://www.linkedin.com/in/pratapkumar-das-085a67252)
- Portfolio: [pratap-kudas.github.io/Portfolio/](https://pratap-kudas.github.io/Portfolio/)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Google Fonts for typography
- Built with pure HTML, CSS, and JavaScript (no frameworks)

---

**Note**: Remember to replace placeholder images and update project links with your actual GitHub repositories and live demo URLs.

