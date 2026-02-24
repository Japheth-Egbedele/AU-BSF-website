import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../Assets/Logo/logo-p.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`nav-panel ${isVisible ? "nav-visible" : "nav-hidden"} ${isScrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <img src={Logo} alt="Logo" />
            <span className="logo-text">AU-BSF</span>
          </Link>

          {/* Desktop Links & Socials */}
          <div className="nav-links-desktop">
            <Link to="/new-here">New Here?</Link>
            <Link to="/about">Who We Are</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/give">Give</Link>

            
            {/* Desktop Socials
            <div className="desktop-socials">
              <a href="https://www.instagram.com/achievers_university_bsf?utm_source=qr&igsh=MWNscTR2Y3dnazc1MA==" target="_blank" rel="noopener noreferrer">
                <i className="bxl bx-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="bxl bx-youtube"></i>
              </a>
            </div> */}

          </div>

          {/* Hamburger (Turns into X) - Inside nav-container for correct stacking */}
          <button 
            className={`nav-hamburger ${isOpen ? "is-active" : ""}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="hamburger-box">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Solid White Mobile Overlay */}
      <div className={`nav-mobile-overlay ${isOpen ? "overlay-active" : ""}`} onClick={closeMenu}>
        <div className="nav-mobile-content" onClick={(e) => e.stopPropagation()}>
          <div className="nav-mobile-links">
            <Link to="/new-here" onClick={closeMenu}>New Here?</Link>
            <Link to="/about" onClick={closeMenu}>Who We Are</Link>
            <Link to="/events" onClick={closeMenu}>Events</Link>
            <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
            <Link to="/give" onClick={closeMenu}>Give</Link>
          </div>

          {/* Mobile Socials */}
<div className="mobile-socials">
  <a href="https://www.instagram.com/..." target="_blank" rel="noopener noreferrer" className="social-bubble-mobile">
    <i className="bxl bx-instagram"></i>
  </a>
  <a href="#" target="_blank" rel="noopener noreferrer" className="social-bubble-mobile">
    <i className="bxl bx-youtube"></i>
  </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="social-bubble-mobile">
    <i className="bxl bx-youtube"></i>
  </a>
</div>
        </div>
      </div>
    </>
  );
}