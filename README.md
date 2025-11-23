# AU-BSF-website V01
Was the initial direction but the UI looked too basic.

# AU-BSF Website – React Version (Pivot)
Context: This was the pivot from the agreed upon decent design to react.js for better component handling and for a faster website.
This project is the React-based rebuild of the AU-BSF (Ambrose Alli University BSF) church website. It modernizes the frontend with reusable components, cleaner structure, and scalable page management using React Router.

Features
Built with React 19 and React Router
Fully component-based architecture
Reusable UI elements (Navbar, Footer, Hero, Cards)
Organized folder structure for easy scaling
Mobile-friendly hamburger navigation using React state

Pages:
Home
New Here
Who We Are
Events
Gallery
Give

Project Structure
src/
  components/       → Navbar, Footer, Hero, cards...
  pages/            → Home.jsx, Gallery.jsx, Give.jsx...
  styles/           → Component/page CSS files
  assets/           → Images, icons, logos
  App.jsx           → App root, routing
  index.jsx         → App entry point

Naming System (Conventions Used in This Project)
To keep the project readable and scalable, the following naming rules are applied:

1. Components & Pages
PascalCase for filenames and component names
Examples:
Navbar.jsx
Home.jsx
GalleryCard.jsx

Why?
React components are classes or units of UI, and PascalCase distinguishes them from regular files.

2. CSS Files
kebab-case for all CSS file names
Examples:
navbar.css
home.css
gallery.css

Why?
CSS files aren't components, so they follow traditional web naming.

3. Functions, Variables & State
camelCase
Examples:
const [isOpen, setIsOpen] = useState(false);
const toggleMenu = () => {};


Why?
camelCase is the JavaScript standard.

4. Routes (URLs for Pages)
lowercase + hyphens
Examples:
/
/new-here
/who-we-are
/gallery
/give

Why?
Clean, SEO-friendly, consistent URL structure.

5. Assets (Images, icons, etc.)
Lowercase
Hyphens or short descriptive names
Examples:
hero-bg.jpg
logo.png
event-1.jpg

Why?
Consistent asset naming keeps file paths predictable.

Getting Started
a. Clone the repository
b. Install dependencies:
npm install
c. Start the development server:
npm start

Routing
This project uses React Router for navigation:
All internal navigation uses:
<Link to="/route">...</Link>
Never use traditional HTML links like href="page.html".

import SheepImg from "../Assets/sheep2.jpg";
<img src={SheepImg} alt="" /> 
<Link to="/" className="learn-more">Learn More</Link>  

Status
Active development — sections, pages, and styles are being gradually migrated from the previous HTML/CSS version into reusable React components.