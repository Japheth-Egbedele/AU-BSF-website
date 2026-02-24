import { Link } from "react-router-dom";
import EventSchedule from '../components/EventSchedule';
import "../styles/event.css";
import "../styles/global.css";
import heroimage from "../Assets/Online/sheep-o.jpg";

export default function EventsPage() {
  return (
    <div className='page-wrapper'>
      {/* Consistent Minimalist Hero */}
      <header className="about-hero-alt">
        <div className="container hero-alt-grid">
          <div className="hero-alt-text">
            <h4 className="script-accent-hero">Gatherings</h4>
            <h1 className="hero-compact-title">EVENTS & SCHEDULE</h1>
            <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
               <Link to="/new-here" className="btn-tan">Plan Your Visit</Link>
            </div>
          </div>
          <div className="hero-alt-image">
            <div className="hero-arch-window" style={{ backgroundImage: `url(${heroimage})` }}></div>
          </div>
        </div>
      </header>

      {/* Scripture & Intro Section */}
      <section className="section-olive centered-text" style={{ padding: '60px 20px' }}>
        <div className="container">
          <blockquote className="scripture-quote">
            <p>
              "And let us consider how to stir up one another to love and good works, 
              not neglecting to meet together..."
            </p>
            <cite>— Hebrews 10:24-25</cite>
          </blockquote>
        </div>
      </section>

      {/* The Actual Schedule Component */}
      <section className="section-cream" style={{ padding: '80px 20px' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
             UPCOMING AT AU-BSF
          </h2>
          <EventSchedule />
        </div>
      </section>
    </div>
  );
}