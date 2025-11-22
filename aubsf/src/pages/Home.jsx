import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/home.css";
import "../styles/global.css";

// Images
import SheepImg from "../Assets/sheep-o.jpg";
import peopleHug from "../Assets/group-1.jpg";
import confer from "../Assets/confer.jpg";

export default function Home() {
  return (
    <div className="wrapper">
      {/* Hero Section */}
      <header>
        <div className="hero-image">
          <img src={SheepImg} alt="Church banner" />
        </div>
        <div className="section1">
          <h3>
            Church For People Like <span className="section1-you">You</span>
          </h3>
          <div className="hero-buttons">
            <Link to="/new-here" className="btn btn-primary">Plan Your Visit</Link>
            <Link to="/about" className="btn btn-secondary">About Us</Link>
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
            Law Building class IV, inside Achievers University Campus<br />
            Owo, Ondo State, Nigeria
          </p>
        </div>
      </section>

      {/* New Here Section */}
      <section className="new-here-section">
        <div className="new-here-container">
          <div className="new-here-text">
            <h2>Are you new?</h2>
            <p>
              Considering AU-BSF as your church home? Wondering how you can grow in your
              relationship with Jesus? Find out what your next steps are.
            </p>
            <Link to="/new-here" className="learn-more">Learn More</Link>
          </div>
          <div className="new-here-image">
            <img src={peopleHug} alt="Community gathering" />
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="new-here-section">
        <div className="new-here-container">
          <div className="new-here-image">
            <img src={peopleHug} alt="Supportive community" />
          </div>
          <div className="new-here-text">
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

      {/* Three Image Section */}
      <section className="three-image-section">
        <div className="images-row">
          <div className="image-container">
            <img src={confer} alt="Community gathering" />
          </div>
          <div className="image-container">
            <img src={confer} alt="Friendly conversation" />
          </div>
          <div className="image-container">
            <img src={confer} alt="Worship music" />
          </div>
        </div>

        <div className="center-link">
          <Link to="/gallery" className="learn-more">Explore Gallery</Link>
        </div>
      </section>

      {/* Give Section */}
      <section className="Give-section">
        <div className="Give-content">
          <h3>Give Online</h3>
          <p>
            Giving online is safe and easy. To give online, click on the link below. 
            Thank you for your generosity!
          </p>
          <Link to="/give" className="learn-more">Learn More</Link>
        </div>
      </section>
      <br /><br />

    </div>
  );
}
