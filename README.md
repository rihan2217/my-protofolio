# Md Rihan — Portfolio (React + Tailwind v4)

A fully componentized React portfolio built with **Vite + Tailwind CSS v4** (@tailwindcss/vite plugin).

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

---

## 📁 Folder Structure

```
portfolio/
├── index.html                  ← Entry point (CDN scripts here)
├── vite.config.js              ← Vite + Tailwind v4 config
├── package.json
└── src/
    ├── main.jsx                ← React root
    ├── App.jsx                 ← Main layout, composes all sections
    ├── assets/
    │   └── css/
    │       └── index.css       ← Tailwind v4 import + global styles
    ├── components/
    │   ├── Header.jsx          ← Nav bar (theme toggle, phone, WhatsApp)
    │   ├── Hero.jsx            ← Full-screen hero with Matter.js animation
    │   ├── ArrowIcon.jsx       ← Reusable SVG arrow button icon
    │   ├── SocialLinks.jsx     ← Right-side vertical social icon list
    │   ├── About.jsx           ← About Me: bio, skills, timeline
    │   ├── Projects.jsx        ← Projects section (reads from data/)
    │   ├── ProjectCard.jsx     ← Individual project card (auto alternates L/R)
    │   ├── Certificates.jsx    ← Swiper carousel for certificates
    │   ├── Contact.jsx         ← Contact form
    │   └── Footer.jsx          ← Footer with social links
    ├── data/
    │   └── projects.js         ← ⭐ ADD NEW PROJECTS HERE
    └── hooks/
        └── useLightMode.js     ← Light/dark mode toggle hook
```

---

## ➕ Adding a New Project

Open `src/data/projects.js` and add an entry at the bottom of the array:

```js
{
  id: 6,                          // unique number
  title: 'My New Project',
  subtitle: '(What it does)',
  label: 'View Project',          // button label
  description: 'Description...',
  tags: ['React', 'Node.js'],
  color: '#your-color',           // pick any hex color
  image: null,                    // or import your image and use it
  github: 'https://github.com/yourusername/repo',
},
```

The layout (left/right alternation) is handled automatically!

---

## 🖼️ Adding Project Images

1. Put your image in `src/assets/images/`
2. At the top of `src/data/projects.js`, import it:
   ```js
   import plantImg from '../assets/images/plant.jpeg'
   ```
3. Set `image: plantImg` in your project object

---

## 📜 Adding Certificates

Open `src/components/Certificates.jsx` and:
1. Import your cert image at the top
2. Add an entry to the `certificates` array:
   ```js
   { id: 4, src: certImg, alt: 'My Cert', title: 'Certificate Title' }
   ```

---

## 🌐 Deployment (Netlify)

For the contact form to work with Netlify Forms, update `Contact.jsx`:
- Change the `<form>` tag to include `data-netlify="true"` and `name="contact"`
- Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`

---

## 🛠️ Tech Stack

- **React 18** — UI components
- **Vite** — Build tool
- **Tailwind CSS v4** — Utility-first styling (@tailwindcss/vite)
- **Swiper.js** — Certificate carousel (CDN)
- **Matter.js** — Physics animation on hero (CDN)
- **Google Fonts** — Spartan, Merriweather, Nunito
