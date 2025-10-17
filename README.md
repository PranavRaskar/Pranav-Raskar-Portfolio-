# Pranav Raskar - Data Analyst Portfolio

A modern, dark-themed portfolio website showcasing data analytics projects, skills, certifications, and achievements. Built with Next.js, Tailwind CSS, and featuring a working contact form powered by Formspree.

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices
- **Dark Theme** - Professional dark theme with cyan/sky blue accents (#0f172a background, #38bdf8 accent)
- **Smooth Animations** - Subtle animations and transitions throughout
- **Working Contact Form** - Integrated with Formspree for direct email delivery
- **Project Showcase** - Interactive project cards with images and links
- **Certifications** - Clickable certification cards with Google Drive links
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Smooth scroll navigation between sections

## 📋 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Professional background and education
3. **Skills** - Technical skills, tools, and soft skills
4. **Experience** - Work experience and internships
5. **Projects** - Featured data analytics projects
6. **Certifications** - Professional certifications with links
7. **Achievements** - Awards and recognitions
8. **Contact** - Working contact form and social links
9. **Footer** - Copyright and back-to-top button

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Contact Form Setup (Formspree)

The contact form is already configured with Formspree and ready to use!

### Verify Formspree Setup

1. **Test the form** - Fill out the contact form on your portfolio and submit
2. **Check your email** - You should receive the message at `pranavraskar02@gmail.com`
3. **Verify on Formspree** - Log in to [Formspree](https://formspree.io) to see submissions

### Formspree Configuration

The form is configured with endpoint: `https://formspree.io/f/mjkajrpr`

**Features:**
- ✅ Direct email delivery to pranavraskar02@gmail.com
- ✅ Loading states during submission
- ✅ Success/error alerts
- ✅ Form validation
- ✅ Spam protection (built into Formspree)

### Troubleshooting

If messages aren't being received:

1. Check your spam folder
2. Verify the Formspree endpoint is correct in `app/page.tsx`
3. Log in to Formspree dashboard to check submission logs
4. Ensure email notifications are enabled in Formspree settings

## 🔄 Alternative: EmailJS Setup

An alternative EmailJS implementation is provided in `components/ContactFormEmailJS.tsx`.

### To Use EmailJS Instead:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
5. Install EmailJS:
\`\`\`bash
npm install @emailjs/browser
\`\`\`
6. Update `components/ContactFormEmailJS.tsx` with your credentials
7. Replace the contact form in `app/page.tsx` with the EmailJS component

## 📝 Customization

### Adding More Projects

In `app/page.tsx`, find the `projects` array and add new projects:

\`\`\`typescript
{
  title: "Your Project Title",
  description: "Project description and key insights",
  tools: ["Tool1", "Tool2", "Tool3"],
  link: "https://github.com/YourUsername/project-link",
  image: "/your-project-image.jpg",
}
\`\`\`

### Adding More Certifications

In `app/page.tsx`, find the `certifications` array and add new certifications:

\`\`\`typescript
{
  name: "Certification Name",
  issuer: "Issuing Organization",
  icon: Award, // Choose from: Code2, BarChart3, Award, Database
  link: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
}
\`\`\`

### Updating Personal Information

Update the following in `app/page.tsx`:
- Email: `pranavraskar02@gmail.com`
- Phone: `+91 87678 38326`
- LinkedIn: `https://linkedin.com/in/pranav-raskar-60337525a`
- GitHub: `https://github.com/PranavRaskar`
- Resume link: Google Drive link in the Hero section

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your portfolio will be live in minutes!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

### Environment Variables

No environment variables are required for Formspree! The form works out of the box.

## 🎨 Design System

- **Background**: `#0f172a` (slate-950)
- **Primary Accent**: `#38bdf8` (cyan-400)
- **Secondary Accent**: `#0ea5e9` (sky-500)
- **Text**: `#f1f5f9` (slate-100)
- **Muted Text**: `#94a3b8` (slate-400)

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Form Service**: Formspree
- **Deployment**: Vercel

## 📄 License

This project is open source and available for personal use.

## 📞 Contact

- **Email**: pranavraskar02@gmail.com
- **LinkedIn**: [Pranav Raskar](https://linkedin.com/in/pranav-raskar-60337525a)
- **GitHub**: [PranavRaskar](https://github.com/PranavRaskar)

---

Built with ❤️ by Pranav Raskar
