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
import gallery16 from "../Assets/Excos/exco3.jpeg";
import gallery17 from "../Assets/Gallery/gallery17.jpeg";
import gallery18 from "../Assets/Gallery/gallery18.jpeg";
import gallery19 from "../Assets/Gallery/gallery19.jpeg";
import gallery20 from "../Assets/Gallery/gallery20.jpeg";
import gallery21 from "../Assets/Gallery/gallery21.jpeg";
import gallery22 from "../Assets/Gallery/image copy.png";
import gallery23 from "../Assets/Gallery/image copy 2.png";
import gallery24 from "../Assets/Gallery/image copy 3.png";
import gallery25 from "../Assets/Gallery/image copy 4.png";
import gallery26 from "../Assets/Gallery/image copy 5.png";
import gallery27 from "../Assets/Gallery/image copy 6.png";
import gallery28 from "../Assets/Gallery/image copy 7.png";
import gallery29 from "../Assets/Gallery/image copy 8.png";
import gallery30 from "../Assets/Gallery/image copy 9.png";
import gallery31 from "../Assets/Gallery/image copy 10.png";
import gallery32 from "../Assets/Gallery/image copy 11.png";
import gallery33 from "../Assets/Gallery/image copy 12.png";
import gallery34 from "../Assets/Gallery/image copy 13.png";
import gallery35 from "../Assets/Gallery/image copy 14.png";
import gallery36 from "../Assets/Gallery/image copy 15.png";
import gallery37 from "../Assets/Gallery/image copy 16.png";
import gallery38 from "../Assets/Gallery/image copy 17.png";
import gallery39 from "../Assets/Gallery/image copy 18.png";
import gallery40 from "../Assets/Gallery/image copy 19.png";
import gallery41 from "../Assets/Gallery/image copy 20.png";
import gallery42 from "../Assets/Gallery/image copy 21.png";
import gallery43 from "../Assets/Gallery/image copy 22.png";
import gallery44 from "../Assets/Gallery/image copy 23.png";
import gallery45 from "../Assets/Gallery/image copy 24.png";
import gallery46 from "../Assets/Gallery/image copy 25.png";
import gallery47 from "../Assets/Gallery/image copy 26.png";
import gallery48 from "../Assets/Gallery/image copy 27.png";
import gallery49 from "../Assets/Gallery/image copy 28.png";
import gallery50 from "../Assets/Gallery/image copy 29.png";
import gallery51 from "../Assets/Gallery/image copy 30.png";
import gallery52 from "../Assets/Gallery/image copy 31.png";
import gallery53 from "../Assets/Gallery/image copy 32.png";
import gallery54 from "../Assets/Gallery/image copy 33.png";
import gallery55 from "../Assets/Gallery/image copy 34.png";
import gallery56 from "../Assets/Gallery/image copy 35.png";
import gallery57 from "../Assets/Gallery/image copy 36.png";
import gallery58 from "../Assets/Gallery/image copy 37.png";
import gallery59 from "../Assets/Gallery/image copy 38.png";
import gallery60 from "../Assets/Gallery/image copy 39.png";
import gallery61 from "../Assets/Gallery/image copy 40.png";
import gallery62 from "../Assets/Gallery/image copy 41.png";
import gallery63 from "../Assets/Gallery/image copy 42.png";
import gallery64 from "../Assets/Gallery/image copy 43.png";
import gallery65 from "../Assets/Gallery/image copy 44.png";
import gallery66 from "../Assets/Gallery/image copy 45.png";
import gallery67 from "../Assets/Gallery/image copy 46.png";
import gallery68 from "../Assets/Gallery/image copy 47.png";
import gallery69 from "../Assets/Gallery/image copy 48.png";
import gallery70 from "../Assets/Gallery/image copy 49.png";
import gallery71 from "../Assets/Gallery/image copy 50.png";
import gallery72 from "../Assets/Gallery/image copy 51.png";
import gallery73 from "../Assets/Gallery/image copy 52.png";
import gallery74 from "../Assets/Gallery/image copy 53.png";
import gallery75 from "../Assets/Gallery/image copy 54.png";
import gallery76 from "../Assets/Gallery/image copy 55.png";
import gallery77 from "../Assets/Gallery/image copy 56.png";
import gallery78 from "../Assets/Gallery/image copy 57.png";
import gallery79 from "../Assets/Gallery/image copy 58.png";
import gallery80 from "../Assets/Gallery/image copy 59.png";
import gallery81 from "../Assets/Gallery/image copy 60.png";
import gallery82 from "../Assets/Gallery/image copy 61.png";
import gallery83 from "../Assets/Gallery/image copy 62.png";
import gallery84 from "../Assets/Gallery/image copy 63.png";
import gallery85 from "../Assets/Gallery/image copy 64.png";
import gallery86 from "../Assets/Gallery/image copy 65.png";
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
    { id: 22, category: "Worship service", img: gallery22, title: "" },
    { id: 23, category: "Worship service", img: gallery23, title: "" },
    { id: 24, category: "Worship service", img: gallery24, title: "" },
    { id: 25, category: "Worship service", img: gallery25, title: "" },
    { id: 26, category: "Worship service", img: gallery26, title: "" },
    { id: 27, category: "Worship service", img: gallery27, title: "" },
    { id: 28, category: "Worship service", img: gallery28, title: "" },
    { id: 29, category: "Worship service", img: gallery29, title: "" },
    { id: 30, category: "Worship service", img: gallery30, title: "" },
    { id: 31, category: "Worship service", img: gallery31, title: "" },
    { id: 32, category: "Worship service", img: gallery32, title: "" },
    { id: 33, category: "Worship service", img: gallery33, title: "" },
    { id: 34, category: "Worship service", img: gallery34, title: "" },
    { id: 35, category: "Worship service", img: gallery35, title: "" },
    { id: 36, category: "Worship service", img: gallery36, title: "" },
    { id: 37, category: "Worship service", img: gallery37, title: "" },
    { id: 38, category: "Worship service", img: gallery38, title: "" },
    { id: 39, category: "Worship service", img: gallery39, title: "" },
    { id: 40, category: "Worship service", img: gallery40, title: "" },
    { id: 41, category: "Worship service", img: gallery41, title: "" },
    { id: 42, category: "Worship service", img: gallery42, title: "" },
    { id: 43, category: "Worship service", img: gallery43, title: "" },
    { id: 44, category: "Worship service", img: gallery44, title: "" },
    { id: 45, category: "Worship service", img: gallery45, title: "" },
    { id: 46, category: "Worship service", img: gallery46, title: "" },
    { id: 47, category: "Worship service", img: gallery47, title: "" },
    { id: 48, category: "Worship service", img: gallery48, title: "" },
    { id: 49, category: "Worship service", img: gallery49, title: "" },
    { id: 50, category: "Worship service", img: gallery50, title: "" },
    { id: 51, category: "Worship service", img: gallery51, title: "" },
    { id: 52, category: "Worship service", img: gallery52, title: "" },
    { id: 53, category: "Worship service", img: gallery53, title: "" },
    { id: 54, category: "Worship service", img: gallery54, title: "" },
    { id: 55, category: "Worship service", img: gallery55, title: "" },
    { id: 56, category: "Worship service", img: gallery56, title: "" },
    { id: 57, category: "Worship service", img: gallery57, title: "" },
    { id: 58, category: "Worship service", img: gallery58, title: "" },
    { id: 59, category: "Worship service", img: gallery59, title: "" },
    { id: 60, category: "Worship service", img: gallery60, title: "" },
    { id: 61, category: "Worship service", img: gallery61, title: "" },
    { id: 62, category: "Worship service", img: gallery62, title: "" },
    { id: 63, category: "Worship service", img: gallery63, title: "" },
    { id: 64, category: "Worship service", img: gallery64, title: "" },
    { id: 65, category: "Worship service", img: gallery65, title: "" },
    { id: 66, category: "Worship service", img: gallery66, title: "" },
    { id: 67, category: "Worship service", img: gallery67, title: "" },
    { id: 68, category: "Worship service", img: gallery68, title: "" },
    { id: 69, category: "Worship service", img: gallery69, title: "" },
    { id: 70, category: "Worship service", img: gallery70, title: "" },
    { id: 71, category: "Worship service", img: gallery71, title: "" },
    { id: 72, category: "Worship service", img: gallery72, title: "" },
    { id: 73, category: "Worship service", img: gallery73, title: "" },
    { id: 74, category: "Worship service", img: gallery74, title: "" },
    { id: 75, category: "Worship service", img: gallery75, title: "" },
    { id: 76, category: "Worship service", img: gallery76, title: "" },
    { id: 77, category: "Worship service", img: gallery77, title: "" },
    { id: 78, category: "Worship service", img: gallery78, title: "" },
    { id: 79, category: "Worship service", img: gallery79, title: "" },
    { id: 80, category: "Worship service", img: gallery80, title: "" },
    { id: 81, category: "Worship service", img: gallery81, title: "" },
    { id: 82, category: "Worship service", img: gallery82, title: "" },
    { id: 83, category: "Worship service", img: gallery83, title: "" },
    { id: 84, category: "Worship service", img: gallery84, title: "" },
    { id: 85, category: "Worship service", img: gallery85, title: "" },
    { id: 86, category: "Worship service", img: gallery86, title: "" }
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