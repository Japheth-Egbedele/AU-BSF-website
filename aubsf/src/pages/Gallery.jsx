import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/gallery.css";
import "../styles/global.css";

// IMPORT YOUR IMAGES
import SheepImg from "../Assets/Online/sample5.jpg";
import gallery1 from "../Assets/Gallery/gallery1.png";
import gallery2 from "../Assets/Gallery/gallery2.jpg";
import gallery3 from "../Assets/Gallery/gallery3.jpg";
import gallery4 from "../Assets/Gallery/gallery4.png";
import gallery5 from "../Assets/Gallery/gallery5.jpg";
import gallery6 from "../Assets/Gallery/gallery6.jpg";
import gallery7 from "../Assets/Gallery/gallery7.jpg";
import gallery8 from "../Assets/Gallery/gallery8.jpg";
import gallery9 from "../Assets/Gallery/gallery9.jpg";
import gallery10 from "../Assets/Gallery/gallery10.png";
import gallery11 from "../Assets/Gallery/gallery11.jpeg";
import gallery12 from "../Assets/Gallery/gallery12.jpeg";
import gallery13 from "../Assets/Gallery/gallery13.jpeg";
import gallery14 from "../Assets/Gallery/gallery14.jpeg";
import gallery15 from "../Assets/Gallery/gallery15.jpeg";
import gallery16 from "../Assets/Gallery/gallery17.jpeg";
import gallery17 from "../Assets/Gallery/gallery17.jpeg";
import gallery18 from "../Assets/Gallery/gallery18.jpeg";
import gallery19 from "../Assets/Gallery/gallery19.jpeg";
import gallery20 from "../Assets/Gallery/gallery20.jpeg";
import gallery21 from "../Assets/Gallery/gallery21.jpeg";

/**
 * Helper Component: Handles the individual image loading state
 */
function GalleryImage({ item }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`gallery-item ${loaded ? "is-loaded" : ""}`}>
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        /* Inline style as a backup to ensure blur is removed when loaded */
        style={{
          filter: loaded ? "none" : "blur(10px)",
          opacity: loaded ? 1 : 0
        }}
        className="gallery-img-tag"
      />
      <div className="image-overlay">
        <p>{item.title}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  // Updated categories list
  const categories = [
    "all",
    "Worship service",
    "Bible study",
    // "Retreats", 
    // "Evangelisms", 
    // "Outreaches",
    'FELLOWSHIP & FAMILY'
  ];
// Add image description to title to display on image *wink*
  const galleryData = [
    { id: 1, category: "Worship service", img: gallery1, title: "" },
    { id: 2, category: "Worship service", img: gallery2, title: "" },
    { id: 3, category: "Worship service", img: gallery3, title: "" },
    { id: 4, category: "Worship service", img: gallery4, title: "" },
    { id: 5, category: "Worship service", img: gallery5, title: "" },
    { id: 6, category: "Worship service", img: gallery6, title: "" },
    { id: 7, category: "Worship service", img: gallery7, title: "" },
    { id: 8, category: "Worship service", img: gallery8, title: "" },
    { id: 9, category: "Worship service", img: gallery9, title: "" },
    { id: 10, category: 'FELLOWSHIP & FAMILY', img: gallery10, title: "" },
    { id: 11, category: "Worship service", img: gallery11, title: "" },
    { id: 12, category: "Worship service", img: gallery12, title: "" },
    { id: 13, category: "Worship service", img: gallery13, title: "" },
    { id: 14, category: "Worship service", img: gallery14, title: "" },
    { id: 15, category: "Worship service", img: gallery15, title: "" },
    { id: 16, category: "Worship service", img: gallery16, title: "" },
    { id: 17, category: "Worship service", img: gallery17, title: "" },
    { id: 18, category: "Bible study", img: gallery18, title: "" },
    { id: 19, category: "Worship service", img: gallery19, title: "" },
    { id: 20, category: "Worship service", img: gallery20, title: "" },
    { id: 21, category: "Worship service", img: gallery21, title: "" },
  ];
  const filteredItems = filter === "all"
    ? galleryData
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="page-wrapper">
      <header className="about-hero-alt">
        <div className="container hero-alt-grid">
          <div className="hero-alt-text">
            <h4 className="script-accent-hero">Captured</h4>
            <h1 className="hero-compact-title">MOMENTS OF FAITH</h1>
            <p id="hero-subtext">A visual journey through our fellowship and growth on campus.</p>
          </div>
          <div className="hero-alt-image">
            <div className="hero-arch-window" style={{ backgroundImage: `url(${SheepImg})` }}></div>
          </div>
        </div>
      </header>

      <div className="gallery-page">
        {/* REFINED FILTERS WITH NEW CATEGORIES */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* DYNAMIC GRID */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <GalleryImage key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}