import "../styles/footer.css"
function Navbar() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-item">
          <a href=""><i className="bx bx-envelope"></i></a>
          <div className="footer-title">Email</div>
          <div className="footer-text">aubsf@gmail.com</div>
        </div>

        <div className="footer-item">
          <a href=""><i className="bx bx-phone"></i></a>
          <div className="footer-title">Church Office</div>
          <div className="footer-text">+234-906-85696</div>
        </div>

        <div className="footer-item">
          <a href=""><i className="bx bx-location"></i></a>
          <div className="footer-title">
            Law Building className IV, inside the Achievers University Campus <br />
            Owo, Ondo State, Nigeria,
          </div>
          <div className="footer-text">AU-BSF</div>
        </div>

        <div className="footer-item">
          <a href="give.html"><i className="bx bx-credit-card-alt"></i></a>
          <div className="footer-title">Give</div>
          <div className="footer-text">Give Online</div>
        </div>
      </div>

      <div className="socials">
        <a href=""><i className="bxl bx-instagram"></i></a>
        <a href=""><i className="bxl bx-youtube"></i></a>
      </div>

      <div className="copyright">
        © 2025 AU-BSF<br />
        <p>JOE</p>
      </div>
    </footer>
  );
}

export default Navbar;
