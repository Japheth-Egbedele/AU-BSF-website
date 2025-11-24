import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">

        <div className="footer-item">
          <i className="bx bx-envelope"></i>
          <div className="footer-title">Email</div>
          <div className="footer-text">
            <a href="mailto:bsfachievers@gmail.com">
              bsfachievers@gmail.com
            </a>
          </div>  
      </div>

        <div className="footer-item">
          <i className="bx bx-phone"></i>
          <div className="footer-title">Church Office</div>
          <div className="footer-text">
            <a href="tel:+2347057558080">+234 705 755 8080</a>
          </div>
        </div>

        <div className="footer-item">
          <i className="bx bx-location"></i>
          <div className="footer-title">
            AU-BSF
          </div>
          <div className="footer-text"> Law Building class IV, inside Achievers University Campus 
            Owo, Ondo State, Nigeria</div>
        </div>

        <div className="footer-item">
          {/* INTERNAL ROUTE → Correct usage */}
          <Link to="/give">
            <i className="bx bx-credit-card-alt"></i>
          <div className="footer-title">Give</div>
          <div className="footer-text">Give Online</div>
          </Link>
        </div>
      </div>

      <div className="socials">
        {/* EXTERNAL LINKS → Must use <a> */}
        <a
          href="https://www.instagram.com/achievers_university_bsf?utm_source=qr&igsh=MWNscTR2Y3dnazc1MA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bxl bx-instagram"></i>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="bxl bx-youtube"></i>
        </a>
      </div>

      <div className="copyright">
        © 2025 AU-BSF
        <p>JOE</p>
      </div>
    </footer>
  );
}

export default Footer;

