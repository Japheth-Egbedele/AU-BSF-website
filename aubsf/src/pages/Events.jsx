import EventsSchedule from '../components/EventSchedule';
import "../styles/event.css";
import "../styles/global.css";
import "../styles/footer.css";
import "../styles/navbar.css";

import heroimage from "../Assets/Online/sheep-o.jpg";
export default function EventsPage() {
  return (
<div className='wrapper'>
  <div className='page'>
<div className="decorative-container1">
          <header>
        <div className="hero-image">
          <img src={heroimage} alt="Church banner" />
        </div>
        <div className="section1">
          <h3>
            Church For People Like <span className="section1-you">You</span>
          </h3>
          <div className="hero-buttons">
            <Link to="/new-here" className="btn btn-primary">Plan Your Visit</Link>
            <Link to="/about" className="btn btn-secondary">About Us</Link>
          </div>
        </div>
      </header>
    <div className='wrapper'>
      <div>
        <blockquote>
            <p>
                "And let us consider how to stir up one another to love and good works, 
                not neglecting to meet together, as is the habit of some, but encouraging 
                one another, and all the more as you see the Day drawing near."
            </p>
            <p>
                — Hebrews 10:24-25 (ESV)
            </p>
        </blockquote>
    </div>
        <h2>
            Come and Experience the Joy of Fellowship and the Power of the Word.
        </h2>
    </div>
<br /><br />
      
      <EventsSchedule />
 
    </div>
  </div>

</div>
  );
}
