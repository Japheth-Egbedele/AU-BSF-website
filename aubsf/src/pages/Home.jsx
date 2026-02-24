import { Link } from "react-router-dom";
import "../styles/home.css";

// Images
import SheepImg from "../Assets/Online/hero.webp"; 
// Note: For the St Matthews look, ensure this image is high quality and slightly dark/moody
import peopleHug from "../Assets/Home/needhelp.png";
import image2 from "../Assets/Home/areyounew.png";
import Gallery1 from "../Assets/Gallery/gallery1.png";
import Gallery2 from "../Assets/Gallery/gallery2.jpg";
import Gallery3 from "../Assets/Gallery/gallery3.jpg";
import Gallery4 from "../Assets/Gallery/gallery4.png";

export default function Home() {
  return (
    <div className="page-wrapper">

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-background">
          <img src={SheepImg} alt="Church banner" fetchpriority="high" loading="eager" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1>
            Church For<br />
            People Like <span className="highlight-text">You</span>
          </h1>
          <p className="hero-subtext">
            Develop deeper relationships with God and others through spiritual formation in community.
          </p>
          
          <div className="hero-buttons">
            <Link to="/new-here" className="btn btn-outline-light">Plan A Visit</Link>
            <Link to="/live" className="btn btn-outline-light">About Us</Link>
          </div>
        </div>
      </header>

      {/* Visit Section */}
      <section className="visit-section">
        <div className="visit-content">
          <h3 className="visit-invite">Join Us Sundays at 8am or 9am!</h3>
          <div className="underline"></div>
          <h1 className="church-name">AU-BSF</h1>
          <p className="visit-text">
            We'd love to get to know you! Join us this Sunday!
          </p>
          <p className="visit-location">
            New Nursing building (Smart Class) 300l lecture hall, inside Achievers University Campus<br />
            Owo, Ondo State, Nigeria
          </p>
        </div>
      </section>

      {/* New Here Section */}
      <section className="split-section bg-light">
        <div className="split-container">
          <div className="split-text">
            <h2>Are you new?</h2>
            <p>
              Considering AU-BSF as your church home? Wondering how you can grow in your
              relationship with Jesus? Find out what your next steps are.
            </p>
            <Link to="/new-here" className="learn-more">Learn More</Link>
          </div>
          <div className="split-image">
            <img src={image2} alt="Community gathering" />
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="split-section">
        <div className="split-container reverse-mobile">
          <div className="split-image">
            <img src={peopleHug} alt="Supportive community" />
          </div>
          <div className="split-text">
            <h2>Need help?</h2>
            <p>
              Whether you’re trying to discern your vocation, struggling with mental health,
              having conflict in a relationship, or for whatever other reason—our pastoral
              team is here for you.
            </p>
            <Link to="/new-here" className="learn-more">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* Give Section */}
      <section className="give-section">
        <div className="give-content">
          <h3>Give Online</h3>
          <p>
            Giving online is safe and easy. To give online, click on the link below.
            Thank you for your generosity!
          </p>
          <Link to="/give" className="learn-more">Learn More</Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-section">
        <div className="gallery-grid">
          <div className="gallery-item"><img src={Gallery1} alt="Gallery 1" /></div>
          <div className="gallery-item"><img src={Gallery2} alt="Gallery 2" /></div>
          <div className="gallery-item"><img src={Gallery3} alt="Gallery 3" /></div>
          <div className="gallery-item"><img src={Gallery4} alt="Gallery 4" /></div>
        </div>
        <div className="center-link">
          <Link to="/gallery" className="learn-more">Explore Gallery</Link>
        </div>
      </section>
    </div>
  );
}