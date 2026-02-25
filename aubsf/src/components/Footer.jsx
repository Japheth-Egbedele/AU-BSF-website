import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* Email */}
        <div className="footer-item">
          <div className="footer-icon-circle">
            <i className="bx bx-envelope"></i>
          </div>
          <h4 className="footer-title">Email</h4>
          <p className="footer-text">
            <a href="mailto:bsfachievers@gmail.com">bsfachievers@gmail.com</a>
          </p>
        </div>

        {/* Phone */}
        <div className="footer-item">
          <div className="footer-icon-circle">
            <i className="bx bx-phone"></i>
          </div>
          <h4 className="footer-title">Church Office</h4>
          <p className="footer-text">
            <a href="tel:+2347057558080">+234 705 755 8080</a>
          </p>
        </div>

        {/* Location */}
        <div className="footer-item">
          <div className="footer-icon-circle">
            <i className="bx bx-map-alt"></i>
          </div>
          <h4 className="footer-title">Location</h4>
          <p className="footer-text">
            New Nursing building (Smart Class) 300l lecture hall, inside Achievers University Campus<br />
            Owo, Ondo State, Nigeria
          </p>
        </div>

        {/* Give */}
        <div className="footer-item">
          <Link to="/give" className="footer-give-link">
            <div className="footer-icon-circle active-green">
              <i className="bx bx-credit-card-alt"></i>
            </div>
            <h4 className="footer-title">Give</h4>
            <p className="footer-text">Support the Ministry</p>
          </Link>
        </div>
      </div>

      <div className="footer-social-wrap">
        <div className="socials">
          <a href="https://www.instagram.com/achievers_university_bsf" target="_blank" rel="noopener noreferrer">
            <i className="bxl bx-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="bxl bx-youtube"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} AU-BSF. All rights reserved.</p>
        </div>
        <a href="https://yourportfolio.com" target="_blank" rel="noreferrer" className="dev-signature">
          Design & Dev by Joe
        </a>
      </div>
    </footer>
  );
}

export default Footer;