import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/newhere.css"; // Make sure to name your CSS file this
import SheepImg from "../Assets/Online/sample3.jpg"; 

export default function NewHere() {
  return (
    <div className="page-wrapper">
      
      {/* 1. PREMIUM HERO (Matching your new minimalist style) */}
      <header className="about-hero-alt">
        <div className="container hero-alt-grid">
          <div className="hero-alt-text">
            <h4 className="script-accent-hero">Welcome Home</h4>
            <h1 className="hero-compact-title">WE'RE GLAD YOU'RE HERE</h1>
            <p id="hero-subtext">
              Whether you're exploring faith or looking for a spiritual family at AU.
            </p>
          </div>
          <div className="hero-alt-image">
            <div className="hero-arch-window" style={{ backgroundImage: `url(${SheepImg})` }}></div>
          </div>
        </div>
      </header>

      {/* 2. WHAT TO EXPECT (3-Column Icon Layout) */}
      <section className="section-cream what-to-expect">
        <div className="container centered-text">
          <h2 className="section-title">WHAT TO EXPECT</h2>
          <p className="sub-head">You don't need to have it all figured out—just come as you are.</p>
          
          <div className="expect-grid">
            {/* Icon Box 1 */}
            <div className="expect-box">
              <div className="expect-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Real Community</h3>
              <p>Meet other AU students who are navigating the same classes, pressures, and life questions as you.</p>
            </div>

            {/* Icon Box 2 */}
            <div className="expect-box">
              <div className="expect-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3>Scripture & Worship</h3>
              <p>Engage in passionate worship and hear practical, truth-filled teachings from the Bible.</p>
            </div>

            {/* Icon Box 3 */}
            <div className="expect-box">
              <div className="expect-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>About 90 Minutes</h3>
              <p>Our gatherings are designed to fit into your student schedule while giving you the spiritual rest you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLAN YOUR VISIT / LOCATION BLOCK */}
      <section className="zig-zag-section">
        <div className="container grid-layout">
          
          <div className="text-content">
            <span className="eyebrow-text">Join Us This Week</span>
            <h2>Plan Your Visit</h2>
            <p className="text-body">
              Walking into a new place can be intimidating. Let us know you're coming, and we'll have a student leader meet you at the door, show you around, and save you a seat.
            </p>
            
            <div className="location-card">
              <h4>AU-BSF Gathering</h4>
              <p><strong>Where:</strong> Law Building Class 3C, Inside Achievers University Campus, Owo, Ondo State</p>
              <p><strong>When:</strong> Sundays at 9:00 AM</p>
            </div>

            <div className="hero-buttons" style={{ justifyContent: 'flex-start', marginTop: '20px' }}>
              <a href="#visit-form" className="btn btn-tan">I'm Coming This Sunday</a>
            </div>
          </div>

          <div className="image-content">
             <div className="arch-image bottom-arch" style={{ backgroundImage: `url(${SheepImg})` }}></div>
          </div>

        </div>
      </section>
      
    </div>
  );
}