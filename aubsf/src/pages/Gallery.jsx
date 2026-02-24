import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/gallery.css";
import "../styles/global.css";

// IMPORT YOUR IMAGES
import SheepImg from "../Assets/Online/sheep-o.jpg";
import StoryImg from "../Assets/Online/sample3.jpg";
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
// Future Imports
// import gallery11 from "../Assets/Gallery/gallery11.jpg";
// import gallery12 from "../Assets/Gallery/gallery12.jpg";
// import gallery13 from "../Assets/Gallery/gallery13.jpg";
// import gallery14 from "../Assets/Gallery/gallery14.jpg";
// import gallery15 from "../Assets/Gallery/gallery15.jpg";

/**
 * Helper Component: Handles the individual image loading state
 */
function GalleryImage({ item }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`gallery-item ${item.category} ${loaded ? "is-loaded" : ""}`}>
      <img 
        src={item.img} 
        alt={item.title} 
        loading="lazy" 
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={loaded ? "fade-in" : "hide-img"}
      />
      <div className="image-overlay">
        <p>{item.title}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("all");

const galleryData = [
  { id: 1, category: "Sunday Gatherings", img: gallery1, title: "Sunday Worship Moment" },
  { id: 2, category: "Sunday Gatherings", img: gallery2, title: "Sunday Worship Moment" },
  { id: 3, category: "Sunday Gatherings", img: gallery3, title: "Sunday Worship Moment" },
  { id: 4, category: "Sunday Gatherings", img: gallery4, title: "Sunday Worship Moment" },
  { id: 5, category: "Sunday Gatherings", img: gallery5, title: "Sunday Worship Moment" },
  { id: 6, category: "Sunday Gatherings", img: gallery6, title: "Sunday Worship Moment" },
  { id: 7, category: "Sunday Gatherings", img: gallery7, title: "Sunday Worship Moment" },
  { id: 8, category: "Sunday Gatherings", img: gallery8, title: "Sunday Worship Moment" },
  { id: 9, category: "Sunday Gatherings", img: gallery9, title: "Sunday Worship Moment" },
  { id: 10, category: "Sunday Gatherings", img: gallery10, title: "Sunday Worship Moment" },
//   Future
//   { id: 11, category: "Sunday Gatherings", img: gallery11, title: "Sunday Worship Moment" },
//   { id: 12, category: "Sunday Gatherings", img: gallery12, title: "Sunday Worship Moment" },
//   { id: 13, category: "Sunday Gatherings", img: gallery13, title: "Sunday Worship Moment" },
//   { id: 14, category: "Sunday Gatherings", img: gallery14, title: "Sunday Worship Moment" },
//   { id: 15, category: "Sunday Gatherings", img: gallery15, title: "Sunday Worship Moment" },
];

  const filteredItems = filter === "all" 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="page-wrapper">
      {/* 1. CONSISTENT HERO */}
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
        {/* 2. REFINED FILTERS */}
        <div className="gallery-filters">
          {["all", "convention", "worship", "outreach"].map((cat) => (
            <button 
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. DYNAMIC GRID */}
<div className="gallery-grid">
          {filteredItems.map((item) => (
            <GalleryImage key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}