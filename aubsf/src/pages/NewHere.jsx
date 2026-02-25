import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/newhere.css";
import SheepImg from "../Assets/Online/sample3.jpg";
import Gallery8 from "../Assets/Gallery/gallery8.jpg";

export default function NewHere() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dept: "",
    note: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRedirecting(true);

    const leaderNumber = "2348115690442";
    const message = `Hello AU-BSF! I'm planning to visit this Sunday.%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*WhatsApp:* ${formData.phone}%0A` +
      `*Dept/Level:* ${formData.dept}%0A` +
      `*Note:* ${formData.note || "No specific questions."}`;

    const whatsappUrl = `https://wa.me/${leaderNumber}?text=${message}`;

    // Give the user a moment to see the "Opening WhatsApp..." state before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsRedirecting(false); // Reset for if they come back to the tab
    }, 800);
  };

  return (
    <div className="page-wrapper">

      {/* 1. PREMIUM HERO */}
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

      {/* 2. WHAT TO EXPECT */}
      <section className="section-cream what-to-expect">
        <div className="container centered-text">
          <h2 className="section-title">WHAT TO EXPECT</h2>
          <p className="sub-head">You don't need to have it all figured out—just come as you are.</p>

          <div className="expect-grid">
            <div className="expect-box">
              <div className="expect-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Real Community</h3>
              <p>Meet other AU students who are navigating the same classes and life questions as you.</p>
            </div>

            <div className="expect-box">
              <div className="expect-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
              <h3>Scripture & Worship</h3>
              <p>Engage in passionate worship and hear practical, truth-filled teachings from the Bible.</p>
            </div>

            <div className="expect-box">
              <div className="expect-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>About 90 Minutes</h3>
              <p>Our gatherings fit into your student schedule while giving you the spiritual rest you need.</p>
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
              Walking into a new place can be intimidating. Let us know you're coming, and we'll have a student leader meet you at the door.
            </p>

            <div className="location-card">
              <h4>AU-BSF Gathering</h4>
              <p><strong>Where:</strong> New Nursing building (Smart Class) 300l lecture hall, Achievers University Campus</p>
              <p><strong>When:</strong> Sunday School 8:00 AM | Service 9:00 AM</p>
            </div>

            <div className="hero-buttons" style={{ justifyContent: 'flex-start', marginTop: '35px', display: 'flex' }}>
              <a href="#visit-form" className="btn btn-tan">I'm Coming This Sunday</a>
            </div>
          </div>

          <div className="image-content">
            <div className="arch-image bottom-arch" style={{ backgroundImage: `url(${Gallery8})` }}></div>
          </div>
        </div>
      </section>

      {/* 4. THE FORM SECTION */}
      <section id="visit-form" className="section-cream">
        <div className="container narrow-form">
          {!isRedirecting ? (
            <>
              <div className="centered-text">
                <h2 className="section-title">I'LL BE THERE</h2>
                <p className="sub-head">Fill this out and we'll save you a seat!</p>
              </div>

              <form className="plan-visit-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="080..."
                      required
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label>Department & Level</label>
                    <input
                      type="text"
                      placeholder="e.g. Nursing 200L"
                      required
                      onChange={(e) => setFormData({ ...formData, dept: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Anything we should know?</label>
                  <textarea
                    placeholder="Optional..."
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-tan full-width-mobile" disabled={isRedirecting}>
                  {isRedirecting ? "Opening WhatsApp..." : "Send to WhatsApp"}
                </button>
              </form>
            </>
          ) : (
            <div className="success-state centered-text">
              <div className="loading-spinner"></div>
              <h2>Opening WhatsApp...</h2>
              <p>Get ready to chat with our student leaders! If the window doesn't open, please check your browser permissions.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}