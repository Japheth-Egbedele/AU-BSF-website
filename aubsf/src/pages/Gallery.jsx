import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/gallery.css";
import "../styles/global.css";

// IMPORT YOUR IMAGES
import SheepImg from "../Assets/Online/sheep-o.jpg";
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
    "Retreats", 
    "Evangelisms", 
    "Outreaches"
  ];

  const galleryData = [
    { id: 1, category: "Worship service", img: gallery1, title: "Worship Service" },
    { id: 2, category: "Bible study", img: gallery2, title: "Bible Study Session" },
    { id: 3, category: "Retreats", img: gallery3, title: "Annual Retreat" },
    { id: 4, category: "Evangelisms", img: gallery4, title: "Campus Evangelism" },
    { id: 5, category: "Outreaches", img: gallery5, title: "Community Outreach" },
    { id: 6, category: "Worship service", img: gallery6, title: "Worship Moment" },
    { id: 7, category: "Bible study", img: gallery7, title: "Word Study" },
    { id: 8, category: "Retreats", img: gallery8, title: "Prayer Retreat" },
    { id: 9, category: "Evangelisms", img: gallery9, title: "Street Evangelism" },
    { id: 10, category: "Outreaches", img: gallery10, title: "Welfare Outreach" },
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