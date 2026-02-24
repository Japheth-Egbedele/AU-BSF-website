import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/gallery.css";
import "../styles/global.css";
import "../styles/footer.css";

import SheepImg from "../Assets/Online/sheep-o.jpg";

export default function Gallery() {
return(
  <div className="gallery-page">
    {/* Filter Buttons */}
    <div className="gallery-filters">
        <button className="filter-btn active" data-category="all">All Events</button>
        <button className="filter-btn" data-category="convention">Conventions</button>
        <button className="filter-btn" data-category="worship">Worship</button>
        <button className="filter-btn" data-category="outreach">Outreach</button>
    </div>

    {/* Image Grid Container */}
    <div className="gallery-grid">
        
        {/* Gallery Item 1 (Example) */}
        <div className="gallery-item convention" data-category="convention">
            <img src="{SheepImg}" alt="Image of the National Convention 2024"
                loading="lazy" /* The optimization you need! */
            />
            <div className="image-overlay">
                <p>2024 National Convention</p>
            </div>
        </div>

        {/* Gallery Item 2 (Example) */}
        <div className="gallery-item worship">
            <img 
                src="path/to/thumb-worship-1.webp" 
                alt="Sunday Service worship team"
                loading="lazy"
            />
        </div>

        {/* ... more gallery items ... */}
        
    </div>
</div>
);
}
