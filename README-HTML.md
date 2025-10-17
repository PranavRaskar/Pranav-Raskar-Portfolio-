# Pranav Raskar - Data Analyst Portfolio (HTML/CSS/JS Version)

A modern, dark-themed portfolio website showcasing data analytics projects, skills, certifications, and achievements. Built with pure HTML, CSS, and JavaScript - no frameworks required!

## 🌟 Features

- **Pure HTML/CSS/JS** - No build tools or frameworks needed
- **Responsive Design** - Fully responsive across all devices
- **Dark Theme** - Professional dark theme with cyan/sky blue accents (#0f172a background, #38bdf8 accent)
- **Smooth Animations** - CSS animations and transitions throughout
- **Working Contact Form** - Integrated with Formspree for direct email delivery
- **Project Showcase** - Interactive project cards with images and links
- **Certifications** - Clickable certification cards with Google Drive links
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Smooth scroll navigation between sections
- **Easy to Deploy** - Works on any static hosting (GitHub Pages, Netlify, Vercel, etc.)

## 📋 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Professional background and education with profile photo
3. **Skills** - Technical skills, tools, and soft skills
4. **Experience** - Work experience and internships
5. **Projects** - Featured data analytics projects with links
6. **Certifications** - Professional certifications with Google Drive links
7. **Achievements** - Awards and recognitions
8. **Contact** - Working contact form and social links
9. **Footer** - Copyright and back-to-top button

## 🚀 Getting Started

### No Installation Required!

This is a static HTML website - just open `index.html` in your browser!

1. Download or clone this repository
2. Open `index.html` in your web browser
3. That's it! Your portfolio is ready.

### File Structure

\`\`\`
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── profile-pranav.jpg  # Your profile photo
├── travel-dashboard-analytics.jpg
├── olympics-data-visualization.jpg
├── uber-trip-dashboard.jpg
├── hr-analytics-dashboard.jpg
├── food-production-trends.jpg
└── README-HTML.md      # This file
\`\`\`

## 📧 Contact Form Setup (Formspree)

The contact form is already configured with Formspree and ready to use!

### How It Works

1. Visitor fills out the form on your portfolio
2. Form submits to Formspree endpoint: `https://formspree.io/f/mjkajrpr`
3. You receive the message at `pranavraskar02@gmail.com`

### Verify Formspree Setup

1. **Test the form** - Fill out the contact form and submit
2. **Check your email** - You should receive the message at pranavraskar02@gmail.com
3. **Verify on Formspree** - Log in to [Formspree](https://formspree.io) to see submissions

**Features:**
- ✅ Direct email delivery to pranavraskar02@gmail.com
- ✅ Loading states during submission
- ✅ Success/error alerts
- ✅ Form validation
- ✅ Spam protection (built into Formspree)
- ✅ No backend code required!

### Troubleshooting

If messages aren't being received:

1. Check your spam folder
2. Verify the Formspree endpoint is correct in `script.js` (line ~150)
3. Log in to Formspree dashboard to check submission logs
4. Ensure email notifications are enabled in Formspree settings

## 📝 Customization Guide

### 1. Adding More Projects

In `index.html`, find the Projects section (around line 250) and look for the comment:

\`\`\`html
<!-- 
============================================
TO ADD MORE PROJECTS: 
Copy the entire project-card div above and paste it here.
Then update the following:
1. Image src (add your image to the same folder)
2. Project title (h3)
3. Project description (p)
4. Tags (update the span elements)
5. Project link (update the href in the anchor tag)
============================================
-->
\`\`\`

**Example:**
\`\`\`html
<div class="project-card">
    <div class="project-image">
        <img src="your-new-project-image.jpg" alt="Your Project Title">
    </div>
    <div class="project-content">
        <h3>Your New Project Title</h3>
        <p>Description of your project and key insights.</p>
        <div class="project-tags">
            <span class="tag">Tool1</span>
            <span class="tag">Tool2</span>
            <span class="tag">Tool3</span>
        </div>
        <a href="YOUR_PROJECT_LINK_HERE" class="btn btn-outline btn-sm" target="_blank">
            View Project <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
</div>
\`\`\`

### 2. Adding Certificate Links

In `index.html`, find each certification card and look for:

\`\`\`html
<!-- PASTE YOUR GOOGLE DRIVE CERTIFICATE LINK IN THE href ABOVE -->
\`\`\`

Replace the empty `href=""` with your Google Drive link:

\`\`\`html
<a href="https://drive.google.com/file/d/YOUR_FILE_ID/view" class="cert-card" target="_blank">
\`\`\`

### 3. Adding More Certifications

In `index.html`, find the Certifications section (around line 350) and look for the comment:

\`\`\`html
<!-- 
============================================
TO ADD MORE CERTIFICATIONS:
Copy the entire cert-card anchor tag above and paste it here.
Then update the following:
1. href - PASTE YOUR GOOGLE DRIVE CERTIFICATE LINK
2. Icon class (choose from: fa-code, fa-chart-bar, fa-award, fa-database, fa-chart-line)
3. Certification name (h3)
4. Issuing organization (p)
============================================
-->
\`\`\`

### 4. Updating Personal Information

Update the following in `index.html`:

- **Email**: Search for `pranavraskar02@gmail.com` and replace
- **Phone**: Search for `+91 87678 38326` and replace
- **LinkedIn**: Search for `linkedin.com/in/pranav-raskar-60337525a` and replace
- **GitHub**: Search for `github.com/PranavRaskar` and replace
- **Resume Link**: Update the Google Drive link in the Hero section (line ~80)

### 5. Changing Colors

In `styles.css`, update the CSS variables at the top:

\`\`\`css
:root {
  --bg-primary: #0f172a;        /* Main background */
  --accent-cyan: #38bdf8;       /* Primary accent color */
  --accent-sky: #0ea5e9;        /* Secondary accent */
  --accent-teal: #14b8a6;       /* Tertiary accent */
  --text-primary: #f1f5f9;      /* Main text color */
}
\`\`\`

### 6. Adding Your Images

Replace the placeholder images with your own:

1. Add your images to the same folder as `index.html`
2. Update the `src` attributes in the HTML:
   - Profile photo: `profile-pranav.jpg`
   - Project images: `travel-dashboard-analytics.jpg`, etc.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free & Easy)

1. Create a GitHub repository
2. Upload all files (index.html, styles.css, script.js, images)
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → Choose "main" branch
5. Click Save
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Create a [Netlify](https://netlify.com) account
2. Drag and drop your folder into Netlify
3. Your site is live instantly!
4. Get a custom domain or use the free Netlify subdomain

### Option 3: Vercel (Free)

1. Create a [Vercel](https://vercel.com) account
2. Click "New Project"
3. Upload your folder or connect GitHub
4. Click "Deploy"
5. Your site is live!

### Option 4: Any Web Hosting

Upload all files to any web hosting service via FTP:
- Hostinger
- Bluehost
- GoDaddy
- SiteGround
- etc.

## 🎨 Design System

- **Background**: `#0f172a` (Dark slate)
- **Primary Accent**: `#38bdf8` (Cyan)
- **Secondary Accent**: `#0ea5e9` (Sky blue)
- **Tertiary Accent**: `#14b8a6` (Teal)
- **Text Primary**: `#f1f5f9` (Light slate)
- **Text Secondary**: `#cbd5e1` (Medium slate)
- **Text Muted**: `#94a3b8` (Muted slate)

## 📦 Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks or libraries
- **Font Awesome** - Icons (loaded via CDN)
- **Formspree** - Contact form backend
- **No Build Tools** - Works directly in the browser!

## ✨ Features Explained

### Smooth Scrolling
Click any navigation link to smoothly scroll to that section.

### Mobile Responsive
The site automatically adapts to mobile, tablet, and desktop screens.

### Contact Form
- Form validation (required fields)
- Loading state while submitting
- Success/error messages
- Direct email delivery via Formspree

### Animations
- Fade-in animations as you scroll
- Hover effects on cards and buttons
- Smooth transitions throughout

### SEO Optimized
- Semantic HTML5 elements
- Meta tags for search engines
- Descriptive alt text for images

## 🔧 Browser Support

Works on all modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📱 Mobile Testing

Test your portfolio on mobile:
1. Open `index.html` in your browser
2. Press F12 to open Developer Tools
3. Click the mobile device icon (or press Ctrl+Shift+M)
4. Select different device sizes to test responsiveness

## 🐛 Troubleshooting

### Images Not Loading
- Make sure all image files are in the same folder as `index.html`
- Check that image filenames match exactly (case-sensitive)

### Form Not Working
- Check your internet connection
- Verify the Formspree endpoint in `script.js`
- Check browser console for errors (F12)

### Styles Not Applying
- Make sure `styles.css` is in the same folder as `index.html`
- Clear your browser cache (Ctrl+Shift+R)

### Icons Not Showing
- Check your internet connection (Font Awesome loads from CDN)
- Verify the Font Awesome CDN link in `index.html` (line ~8)

## 📄 License

This project is open source and available for personal use.

## 📞 Contact

- **Email**: pranavraskar02@gmail.com
- **LinkedIn**: [Pranav Raskar](https://linkedin.com/in/pranav-raskar-60337525a)
- **GitHub**: [PranavRaskar](https://github.com/PranavRaskar)

---

Built with ❤️ by Pranav Raskar | Pure HTML, CSS & JavaScript - No frameworks needed!
