import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import Logo from "../Assets/Logo.png";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hero-image">

      <nav className="navpanel" aria-label="Main navigation">
        <div className="nav-container">

          {/* Logo */}
          <div className="logo">
            <Link to="/" id="ollo">
              <img src={Logo} alt="Logo of AU-BSf" />
              <span>AU-BSF</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="navbar">
            <Link to="/new-here">New Here?</Link>
            <Link to="/who-we-are">Who We Are</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/give">Give</Link>
          </div>
        </div>
      </nav>

      {/* Hamburger */}
      <button
        className="hamburger"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/new-here" onClick={() => setIsOpen(false)}>New Here?</Link>
        <Link to="/who-we-are" onClick={() => setIsOpen(false)}>Who We Are</Link>
        <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/give" onClick={() => setIsOpen(false)}>Give</Link>
      </div>

    </div>
  );
}
