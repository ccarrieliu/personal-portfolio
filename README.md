# Personal Portfolio Website

A modern, responsive portfolio website built with React.js. This project showcases professional skills, projects, and contact information in a clean and engaging design.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Featured and regular project displays
- **Skills Section**: Visual representation of technical skills
- **Social Media Integration**: Links to professional social profiles

## Sections

1. **Hero Section**: Introduction and call-to-action
2. **About**: Personal information and background
3. **Skills**: Technical skills with progress indicators
4. **Projects**: Portfolio of work with descriptions
5. **Contact**: Contact form and information
6. **Footer**: Additional links and social media

## Technologies Used

- **React.js**: Frontend framework
- **CSS3**: Styling with modern CSS features
- **JavaScript (ES6+)**: Modern JavaScript features
- **HTML5**: Semantic HTML structure

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills section
│   ├── Projects.js     # Projects section
│   ├── Contact.js      # Contact section
│   └── Footer.js       # Footer component
├── styles/             # CSS files
│   ├── App.css         # Main styles
│   ├── Header.css      # Header styles
│   ├── Hero.css        # Hero styles
│   ├── About.css       # About styles
│   ├── Skills.css      # Skills styles
│   ├── Projects.css    # Projects styles
│   ├── Contact.css     # Contact styles
│   └── Footer.css      # Footer styles
├── assets/             # Images and other assets
├── utils/              # Utility functions
└── App.js              # Main App component
```

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.js`: Update name and title
- `src/components/About.js`: Update bio, experience, and details
- `src/components/Skills.js`: Update skills and proficiency levels
- `src/components/Projects.js`: Add your own projects
- `src/components/Contact.js`: Update contact information
- `src/components/Footer.js`: Update name and social links

### Styling

The project uses a consistent color scheme defined in the CSS files. The main colors are:

- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Text: `#2d3748` (Dark gray)
- Background: `#f8fafc` (Light gray)

### Adding Projects

To add new projects, edit the `projects` array in `src/components/Projects.js`:

```javascript
{
  id: 7,
  title: "Your Project Name",
  description: "Project description here...",
  image: "path/to/image.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/your-username/project",
  featured: false // Set to true for featured projects
}
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out through the contact form on the website or via email.

---

**Note**: Remember to replace placeholder content (images, text, links) with your actual information before deploying.
