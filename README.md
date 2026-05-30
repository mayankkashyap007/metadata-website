# Metadata Technologies — React Website

A full React conversion of the Metadata Technologies HTML website.
Built with React 18, React Router v6, and pure CSS (no Tailwind required).

---

## 🗂 Project Structure

```
metadata-react/
├── public/
│   └── index.html          ← HTML shell with Google Fonts + FontAwesome CDN
├── src/
│   ├── App.js              ← Router setup + layout
│   ├── index.js            ← Entry point
│   ├── data.js             ← ALL site content (text, images, nav links)
│   ├── styles/
│   │   └── global.css      ← CSS variables, utilities, buttons
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── ScrollTop.jsx
│   └── pages/
│       ├── Home.jsx / .css
│       ├── About.jsx / .css
│       ├── Services.jsx / .css
│       ├── Portfolio.jsx / .css
│       └── Contact.jsx / .css
├── vercel.json             ← Vercel SPA routing config
├── package.json
└── .gitignore
```

---

## 🚀 Running Locally

### Step 1 — Install Node.js
Download and install Node.js (v18 or higher) from https://nodejs.org

### Step 2 — Install dependencies
```bash
cd metadata-react
npm install
```

### Step 3 — Start development server
```bash
npm start
```
Open http://localhost:3000 in your browser. The page hot-reloads on save.

---

## 🏗 Build for Production
```bash
npm run build
```
This creates a `build/` folder with optimized static files ready for deployment.

---

## ☁️ Deploying to Vercel (Recommended)

### Option A — Via Vercel CLI (fastest)

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from the project folder:
   ```bash
   vercel
   ```
   Follow the prompts:
   - **Set up and deploy?** → Yes
   - **Which scope?** → Your account
   - **Link to existing project?** → No
   - **Project name?** → metadata-technologies (or any name)
   - **Directory?** → ./ (current folder)
   - **Override settings?** → No

4. For production deployment:
   ```bash
   vercel --prod
   ```

Your site will be live at `https://your-project-name.vercel.app` 🎉

---

### Option B — Via GitHub + Vercel Dashboard (recommended for teams)

1. Push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/metadata-technologies.git
   git push -u origin main
   ```

2. Go to https://vercel.com → **New Project**

3. Click **Import** next to your GitHub repository

4. Vercel auto-detects Create React App settings:
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`

5. Click **Deploy** — done! ✅

Every future `git push` will auto-deploy to Vercel.

---

## 🔧 Customization Guide

### Change company info
Edit `src/data.js` → `COMPANY_INFO` object:
```js
export const COMPANY_INFO = {
  name: 'Metadata Technologies',
  phone: '+91 724 913 0238',
  email: 'hr@metadatatechnologies.in',
  address: '...',
};
```

### Add/edit services
Edit `src/data.js` → `SERVICES` array. Each service has:
- `title`, `desc`, `img` (URL), `features` (array of strings)

### Change colors / fonts
Edit `src/styles/global.css` → `:root` CSS variables:
```css
:root {
  --accent: #e8a022;    /* gold/orange accent */
  --primary: #0a0f1e;   /* dark navy background */
}
```

### Add a new page
1. Create `src/pages/NewPage.jsx`
2. Import and add a `<Route>` in `src/App.js`
3. Add the link to `NAV_LINKS` in `src/data.js`

---

## 📦 Dependencies Used
| Package | Purpose |
|---|---|
| react, react-dom | UI framework |
| react-router-dom | Client-side routing |
| @fortawesome/fontawesome-free | Icons (via CDN in index.html) |
| react-scripts | Build tooling (CRA) |

All icons are loaded via CDN (FontAwesome 6), fonts via Google Fonts — no extra installs needed.
