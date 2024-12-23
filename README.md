# Mohammed Bajaman Portfolio Website

A modern, responsive portfolio website built with React, showcasing my work.

## 🌐 Live Site

Visit the live site at [mbajaman.dev](https://mbajaman.dev)
Visit the staging site at [staging.mbajaman.dev](https://staging.mbajaman.dev)

## 🛠️ Built With

- React.js
- React Type Animation
- CSS3

## ✨ Features

- Responsive design that works on all devices
- Smooth animations and transitions
- Dynamic typing animation
- Modern and clean UI
- Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/mbajaman/portfolio.git
```


2. Install dependencies
```bash
cd portfolio
npm install
```

3. Start the development server
```bash
npm start
```

4. Build for production
```bash
npm run build
```


## 📁 Project Structure
src/<br /> 
├── assets/<br /> 
│ ├── about-icons/<br /> 
│ ├── flag-icons/<br /> 
│ ├── project-media/<br /> 
│ ├── skill-icons/<br /> 
│ └── social-icons/<br /> 
├── components/<br /> 
│ ├── footer/<br /> 
│ ├── modal/<br /> 
│ ├── navbar/<br /> 
│ └── project/<br /> 
├── data/<br /> 
├── pages/<br /> 
│ └── home/<br /> 
├── sections/<br /> 
│ ├── about/<br /> 
│ ├── hero/<br /> 
│ ├── skills/<br /> 
│ └── work/<br /> 
├── styles/<br /> 
└── App.js


## 🔧 Configuration

The site can be configured by modifying:
- Social media links in `Footer.js`
- Navigation items in `Navbar.js`
- Sections are in the `src\sections` folder.
- Global stylesheet located in `global.css`
- Current theme vars in `theme.css`

## 📱 Responsive Design

The website is responsive and optimized for:
<br/><br/>```⚠️ Safari has issues and needs to be tested```
- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

## 🚀 Deployment
The site is configured for deployment on GitHub Pages. To deploy:
Configure CNAME and appropriate homepage variable before deploying using:
```bash
npm run predeploy:prod
```

Deploy using:
```bash
npm run deploy:prod
```

Similarly for staging
```bash
npm run predeploy:staging
npm run deploy:staging
```

Links and config for prod and staging can be found in `package.json`, `scripts/set-cname.js` and `scripts/set-homepage.js`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.