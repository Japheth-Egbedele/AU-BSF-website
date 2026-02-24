import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../Assets/Logo/logo-p.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollYValue = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollYValue) {
        setIsVisible(true);
      } else if (currentScrollY > 100) {
        // Hide navbar when scrolling down (but not at the very top)
        setIsVisible(false);
      }

      lastScrollYValue = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navpanel ${isVisible ? "visible" : "hidden"}`} aria-label="Main navigation">
        <div className="nav-container">
          <div className="logo">
            <Link to="/" id="ollo">
              <img src={Logo} alt="Logo of AU-BSf" />
              <span>AU-BSF</span>
            </Link>
          </div>

          <div className="navbar">
            <Link to="/new-here">New Here?</Link>
            <Link to="/about">Who We Are</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/give">Give</Link>
          </div>
        </div>
      </nav>

      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <Link to="/new-here" onClick={() => setIsOpen(false)}>New Here?</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>Who We Are</Link>
        <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/give" onClick={() => setIsOpen(false)}>Give</Link>
      </div>
    </>
  );
}