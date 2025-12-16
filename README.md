# Personal Website

A professional, minimalistic personal portfolio website with a stoic design aesthetic. Perfect for showcasing your professional profile alongside your CV.

## Features

- Clean, minimalistic design with stoic styling
- Fully responsive (mobile, tablet, desktop)
- Easy to customize
- Professional sections: About, Experience, Skills, Education, Contact
- Ready to host on any static hosting platform

## Customization

1. Open `index.html` and replace the placeholder content:
   - Your name and professional title in the header
   - About section with your personal introduction
   - Experience section with your work history
   - Skills section with your technical and soft skills
   - Education section with your academic background
   - Contact section with your actual contact information

2. (Optional) Customize colors in `styles.css`:
   - Edit the CSS variables in the `:root` section
   - Adjust `--primary-color`, `--secondary-color`, etc.

## Hosting Options

### GitHub Pages (Free)
1. Go to your repository Settings
2. Navigate to Pages section
3. Select the branch to deploy (e.g., `main`)
4. Your site will be available at `https://yourusername.github.io/personal-website`

### Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Deploy with default settings
4. Get a custom domain or use the provided Netlify URL

### Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically
4. Custom domain available

### Other Options
- AWS S3 + CloudFront
- Google Firebase Hosting
- Cloudflare Pages
- Any static hosting service

## Local Development

Simply open `index.html` in your web browser to preview the site locally.

Alternatively, use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with npx)
npx serve
```

Then visit `http://localhost:8000` in your browser.

## Design Philosophy

This template follows a **stoic and minimalistic** design approach:
- Neutral color palette (blacks, grays, whites)
- Clean typography with ample whitespace
- No unnecessary decorations or animations
- Focus on content and clarity
- Professional and timeless aesthetic

## License

Free to use for personal purposes.