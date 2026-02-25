import { Link } from "react-router-dom";
import EventSchedule from '../components/EventSchedule';
import "../styles/event.css";
import "../styles/global.css";

// Images
import heroimage from "../Assets/Online/gathering.jpg";
// Reusing gallery images for placeholders - swap these for specific event banners later
import BibleImg from "../Assets/Gallery/gallery3.jpg";
import ThanksgivingImg from "../Assets/Gallery/gallery2.jpg";
import EvangelismImg from "../Assets/Gallery/gallery4.png";

export default function EventsPage() {

  // Data for the Featured Events
  const featuredEvents = [
    {
      id: 1,
      title: "Bible Study Sunday",
      date: "MAR 02",
      time: "4:00 PM",
      image: BibleImg,
      desc: "Dive deep into the Word with us as we explore the book of Romans. Bring your Bible and a notebook!"
    },
    {
      id: 2,
      title: "Evangelism Sunday",
      date: "MAR 15",
      time: "9:00 AM",
      image: EvangelismImg,
      desc: "Taking the light of Christ to the campus. We will gather for prayer before heading out to share the Gospel."
    },
    {
      id: 3,
      title: "Thanksgiving Sunday",
      date: "MAR 29",
      time: "8:00 AM",
      image: ThanksgivingImg,
      desc: "A special service dedicated to testimonies, praise, and gratitude for all God has done this semester."
    }
  ];

  return (
    <div className='page-wrapper'>
      {/* Consistent Minimalist Hero */}
      <header className="about-hero-alt">
        <div className="container hero-alt-grid">
          <div className="hero-alt-text">
            <h4 className="script-accent-hero">Gatherings</h4>
            <h1 className="hero-compact-title">EVENTS & SCHEDULE</h1>
            <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
              <Link to="/new-here" className="btn-outline-light">Plan Your Visit</Link>
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
        <EventSchedule />
      </section>

      {/* --- NEW: FEATURED EVENTS SECTION --- */}
      <section className="section-white" style={{ padding: '80px 20px' }}>
        <div className="container">
          <div className="section-header centered-text">
                        <h1 className="section-title disney-font" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <>
                    {"UPCOMING AT".split("").map((letter, index) => (
                        <span
                            key={index}
                            className="jumpy-letter"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                    <br />
                    {"AU-BSF".split("").map((letter, index) => (
                        <span
                            key={`schedule-${index}`}
                            className="jumpy-letter"
                            style={{ animationDelay: `${(index + 11) * 0.1}s` }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                </>
            </h1>
           <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>SPECIAL EVENTS</h2>
          </div>

          <div className="featured-grid">
            {featuredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="card-image-wrap">
                  <img src={event.image} alt={event.title} />
                  <div className="date-badge">
                    <span className="date-month">{event.date.split(' ')[0]}</span>
                    <span className="date-day">{event.date.split(' ')[1]}</span>
                  </div>
                </div>
                <div className="card-details">
                  <span className="event-time-badge">{event.time}</span>
                  <h3>{event.title}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}