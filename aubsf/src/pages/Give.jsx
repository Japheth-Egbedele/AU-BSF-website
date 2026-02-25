import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/give.css";
import SheepImg from "../Assets/Online/sample4.jpg";


export default function Give() {
  return (
    <div className="give-page">
      {/* 1. HERO SECTION WITH SCRIPTURE */}
      <section className="give-hero">
        <div className="hero-overlay"></div>
        <div className="give-hero-content">
          <h2>"For all things come from You, and of your own we have given you."</h2>
          <p className="reference">1 Chronicles 29:14</p>
        </div>
      </section>

      {/* 2. MISSION STATEMENT */}
      <section className="support-mission">
        <div className="container">
          <h3>Support the Ministry of AU-BSF</h3>
          <div className="brand-underline"></div>
          <p>
            We invite you to partner with us in spreading truth, beauty, and goodness 
            through your generous giving. Your support fuels our campus outreach 
            and spiritual formation.
          </p>
        </div>
      </section>

      {/* 3. WHY WE GIVE SECTION */}
      <section className="why-give-section">
        <div className="container why-give-container">
          <div className="why-give-text">
            <h2>Why We Give</h2>
            <p>
              Giving is an act of worship and an expression of gratitude for God’s 
              faithfulness. At AU-BSF, we believe that when we give, we are 
              investing in the spiritual formation of students and the 
              transformation of our campus.
            </p>
            <p>
              As we go above and beyond with our resources to support our 
              fellowship, we continue to collectively impact every student 
              who walks through our doors.
            </p>
            <a href="#how-to-give" className="btn-stories">How to Give</a>
          </div>
          
          <div className="why-give-image">
            {/* Replicating the Arch Window from your reference image */}
            <div className="arch-window-frame">
              <img src={SheepImg} alt="Fellowship in action" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WAYS TO GIVE GRID */}
      <section className="ways-to-give" id="how-to-give">
        <div className="container">
          <h2 className="section-title">Ways to Give</h2>
          
          <div className="give-grid">
            {/* Direct Deposit Card */}
            <div className="give-card banking">
              <div className="card-icon">
                <i className='bx bx-credit-card-alt'></i>
              </div>
              <h3>Direct Deposit</h3>
              <div className="account-details">
                <p className="bank-name">MONIEPOINT</p>
                <p className="account-number">5005 4317 57</p>
                <p className="account-name">Susan Ibiloye Oyediran</p>
              </div>
              <span className="copy-hint">Transfer via your banking app</span>
            </div>

            {/* In Person Card */}
            <div className="give-card">
              <div className="card-icon">
                <i className='bx bx-church'></i>
              </div>
              <h3>In Person</h3>
              <p>You can give through cash or cheques during our Sunday morning worship or any midweek service.</p>
              <span className="location-hint">Nursing Building, 300L Hall</span>
            </div>
          </div>

          {/* Contact / Bequest Info */}
          <div className="give-inquiry">
            <div className="inquiry-content">
              <h3>Questions or Special Gifts?</h3>
              <p>
                For inquiries regarding <strong>bequests</strong>, memorial gifts, or other 
                special contributions, please contact our pastoral team using the 
                details in the footer below.
              </p>
              <div className="inquiry-divider"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}