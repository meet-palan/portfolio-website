# Meet Palan - Business Analyst Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion, showcasing Meet Palan's expertise as an Aspiring Business Analyst.

## Features

- **Modern Design**: Clean, professional design with custom color palette
- **Glass Effect**: Beautiful glassmorphism effects throughout
- **Smooth Animations**: Framer Motion for fluid interactions
- **Responsive**: Mobile-first design that works on all devices
- **Modular**: Separate data and components for easy maintenance
- **Fast**: Built with Next.js for optimal performance

## Color Palette

- **Primary**: Navy Blue (#2C3E50) - Trust, reliability, leadership
- **Secondary**: Medium Gray (#7F8C8D) - Sophistication, neutrality  
- **Background**: Light Gray (#F4F4F4) - Clean, professional
- **Accent**: Teal (#2A9D8F) - Innovation, analytical thinking
- **Text**: Dark Charcoal (#333333) - Maximum readability

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── components/
│   ├── About.js            # About section
│   ├── Contact.js          # Contact section
│   ├── Education.js        # Education & certifications
│   ├── Experience.js       # Work experience
│   ├── Hero.js             # Hero section with profile photo
│   ├── Navbar.js           # Navigation
│   ├── Projects.js         # Featured projects
│   └── Skills.js           # Skills & expertise
├── data/
│   └── profile.js          # All portfolio data
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Adding Your Profile Photo

1. Add your photo to the `public/` folder
2. Update the `profileImage` path in `data/profile.js`
3. Uncomment the image component in `components/Hero.js`

### Updating Content

All content is centralized in `data/profile.js`. Update this file to customize:
- Personal information
- Skills and expertise
- Projects and case studies
- Work experience
- Education and certifications
- Contact information

### Styling

- Global styles: `app/globals.css`
- Color customization: `tailwind.config.js`
- Component-specific styles: Individual component files

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## Key Components

- **Hero**: Animated introduction with glass-effect profile photo area
- **About**: Professional summary with animated stats
- **Skills**: Categorized skills with hover effects
- **Projects**: Detailed project showcases with problem-solution format
- **Experience**: Timeline-based work experience
- **Education**: Academic background and certifications
- **Contact**: Contact form with professional references

## Performance Features

- Image optimization with Next.js Image component
- Lazy loading for animations and components
- Optimized bundle size
- SEO-friendly structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

---

**Note**: Remember to replace placeholder content with your actual information and add your profile photo to make it truly yours.
