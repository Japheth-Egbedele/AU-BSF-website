import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/about.css";

// Images
import GroupPraying from "../Assets/Gallery/pastor.png"; // Replace with actual group image
import PastorImg from "../Assets/Gallery/gallery9.jpg"; // Replace with pastor image
import StoryImg from "../Assets/Online/sample3.jpg";
import TeamImg from "../Assets/Gallery/gallery7.jpg";
import GroupImg from "../Assets/Gallery/gallery10.png";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBelief = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const beliefs = [
    { title: "THE BIBLE", content: "We believe the Bible is God’s inspired Word—our guide for faith and life." },
    { title: "SALVATION", content: "We believe salvation comes only through Jesus Christ, who died and rose again." },
    { title: "THE TRINITY", content: "We believe in one God existing in three persons: Father, Son, and Holy Spirit." },
    { title: "THE CHURCH", content: "We believe the church is the body of Christ, sent to shine His light." }
  ];

  return (
    <div className="page-wrapper">

      {/* 1. HERO ALTERNATIVE (Split Arch Hero) */}
      <header className="about-hero-alt">
        <div className="container hero-alt-grid">
      <div className="hero-alt-text">
        {/* The elegant script font from the reference */}
        <h4 className="script-accent-hero">About Us</h4>
        
        {/* The bold, concise identifier */}
        <h1 className="hero-compact-title">WHO ARE WE?</h1>
        
        {/* A single, punchy line of information */}
        <p id="hero-subtext">
          A student family passionate about Jesus and the AU campus.
        </p>
      </div>
    <div className="hero-alt-image">
      <div className="hero-arch-window" style={{ backgroundImage: `url(${StoryImg})` }}></div>
    </div>
  </div>
</header>

      {/* 2. SECTION: "You're Not Alone" (Upgraded) */}
      <section className="zig-zag-section">
        <div className="container grid-layout">

          <div className="text-content">
            <div className="accent-line"></div>
            <span className="eyebrow-text text-green">Our Story</span>
            <h2>"You're not alone."</h2>
            <div className="text-body">
              <p>
                That might sound obvious when you live in a city of millions or attend a crowded university.
                But we've felt alone <em>many</em> times before: in our struggles, academic pressures, and
                uncertainties about life's purpose.
              </p>
              <p>
                And we believed those "imperfections" would keep us from building the life we longed
                for or becoming the person we dreamed we could be.
              </p>
              <p className="strong-statement">
                But all of that changed when we met Jesus.
              </p>
            </div>
          </div>

          <div className="image-content">
            {/* The Image Wrapper creates the offset effect */}
            <div className="arch-wrapper">
              <div className="arch-backdrop"></div>
              <div className="arch-image top-arch" style={{ backgroundImage: `url(${GroupPraying})` }}></div>
            </div>
          </div>

        </div>
      </section>
      {/* 3. SECTION: "Invitation" (Image Left, Text Right - Arch) */}
      <section className="zig-zag-section bg-cream">
        <div className="container grid-layout reverse-layout">
          <div className="image-content">
            <div className="arch-image bottom-arch" style={{ backgroundImage: `url(${PastorImg})` }}></div>
          </div>

          <div className="text-content">
            <h2>We invite you to join us at the table with Jesus.</h2>
            <p>
              Don't worry about the “right way” to show up—just pull up a chair and be yourself.
              When you do, you'll never feel alone again.
            </p>
            <p>
              Because at AU-BSF, the path to transformation is <strong>people together with Jesus.</strong>
            </p>
            <Link to="/new-here" className="learn-more">Get Connected</Link>
          </div>
        </div>
      </section>

      {/* 5. OUR STORY (Green Background Block) */}
      <section id="story" className="section-olive">
        <div className="container centered-text">
          <div className="icon-logo">✳</div> {/* Placeholder for a church icon */}
          <h2>OUR STORY</h2>
          <p className="story-text">
            AU-BSF started as a group of people who loved the Lord meeting in classrooms.
            God provided a building for our budding community to meet in—then it grew beyond
            what we imagined. Today, we see a campus filled with the Holy Spirit and hungry for
            the Word.
          </p>
        </div>
      </section>
      
      {/* 4. PASTORS / LEADERSHIP */}
      <section className="zig-zag-section">
        <div className="container grid-layout">
          <div className="text-content">
            <h4 className="script-accent text-rust">Meet</h4>
            <h2>OUR LEADERSHIP</h2>
            <p className="lead-text">
              Led by the Holy Spirit, our leadership team is dedicated to serving the students
              and staff of Achievers University with passion and integrity.
            </p>
            <Link to="/leadership" className="learn-more">Meet The Team</Link>
          </div>
          <div className="image-content">
            {/* Full circle or Pill shape for pastors */}
            <div className="arch-image pill-shape" style={{ backgroundImage: `url(${TeamImg})` }}></div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER CTA */}
      <section className="section-footer-cta">
        <div className="container">
          <h2 className="script-accent">Stay Connected</h2>
          <h3>AT AU-BSF</h3>
          <p>Even in a city of millions, it's easy to feel alone. With us, you don't have to.</p>
          <div className="footer-cols">
            <div className="col bg-olive">
              <h3>MINISTRIES</h3>
            </div>
            <div className="col bg-rust">
              <h3>GROUPS &<br />SUPPORT</h3>
            </div>
            <div className="col bg-blue">
              <h3>FAQS</h3>
            </div>
          </div>
        </div>
      </section>
<br />
      {/* --- BIG LANDSCAPE BREATHER --- */}
      <section className="landscape-image-wrap">
        <div className="landscape-inner">
          {/* You can change 'StoryImg' to any other imported landscape image */}
          <img src={GroupImg} alt="AU-BSF Community" />
        </div>
      </section>

      {/* 6. BELIEFS (Clean List Style) */}
      <section className="section-cream">
        <div className="container centered-text">
          <h2 id="belief-h2">OUR BELIEFS</h2>
          <p className="sub-head">You can read more about what we believe below.</p>

          <div className="accordion-clean">
            {beliefs.map((belief, index) => (
              <div key={index} className="accordion-row">
                <button className="accordion-clean-header" onClick={() => toggleBelief(index)}>
                  {belief.title}
                  <span className="icon-clean">{openIndex === index ? "−" : "+"}</span>
                </button>
                <div className={`accordion-clean-body ${openIndex === index ? "open" : ""}`}>
                  <p>{belief.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}