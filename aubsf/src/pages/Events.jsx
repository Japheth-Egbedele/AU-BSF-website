import { Link } from "react-router-dom";
import EventSchedule from '../components/EventSchedule';
import "../styles/event.css";
import "../styles/global.css";

// Images
import heroimage from "../Assets/Online/gathering.jpg";
// Reusing gallery images for placeholders - swap these for specific event banners later
import BibleImg from "../Assets/Gallery/gallery3.jpg";
import ThanksgivingImg from "../Assets/Gallery/gallery2.jpg";
import EvangelismImg from "../Assets/Gallery/gallery10.png";
import PastorImg from "../Assets/Gallery/gallery3.jpg";
import TeamImg from "../Assets/Online/health.png";


export default function EventsPage() {

  // Data for the Featured Events
  const featuredEvents = [
    {
      id: 1,
      title: "Resumption Day",
      date: "MAR 15",
      time: "9:00 AM",
      image: TeamImg,
      desc: "Welcome back to campus! Join us for our first service of the semester."
    },
    {
      id: 2,
      title: "Hostel Visitation",
      date: "MAR 21",
      time: "Evening",
      image: EvangelismImg,
      desc: "Publicity and visitation across hostels for fellowship worship resumption."
    },
    {
      id: 3,
      title: "Excos’ Retreat",
      date: "MAR 27-28",
      time: "8:00 PM",
      image: PastorImg,
      desc: "A dedicated weekend of prayer and vision-casting for the leadership team."
    },
    {
      id: 4,
      title: "Health Sunday",
      date: "APR 12",
      time: "9:00 AM - 11:30 AM",
      image: TeamImg,
      desc: "Prioritizing our physical and spiritual health as a body of Christ."
    },
    {
      id: 5,
      title: "Workers’ Retreat",
      date: "APR 17-18",
      time: "Fri: 9PM | Sat: 9AM",
      image: PastorImg,
      desc: "Equipping all workers for the spiritual tasks of the semester."
    },
    {
      id: 6,
      title: "Cultural Sunday",
      date: "APR 26",
      time: "9:00 AM - 11:30 AM",
      image: BibleImg,
      desc: "Celebrating our diverse heritage. Dress Code: Native Attire."
    },
    {
      id: 7,
      title: "Bible Study Sunday",
      date: "MAY 10",
      time: "9:00 AM - 11:30 AM",
      image: BibleImg,
      isFeatured: true, // <--- MANUALLY SET
      desc: "An intensive time of diving deep into the Word together."
    },
    {
      id: 8,
      title: "Brothers & Sisters Week",
      date: "MAY 25-31",
      time: "See Schedule",
      image: EvangelismImg,
      isFeatured: true, // <--- MANUALLY SET
      desc: "A full week of bonding, special sessions, and fellowship activities."
    },
    {
      id: 9,
      title: "Handing Over & FYB Sunday",
      date: "JUN 07",
      time: "9:00 AM - 11:30 AM",
      image: ThanksgivingImg,
      isFeatured: true, // <--- MANUALLY SET
      desc: "Celebrating our graduating brethren and the transition of leadership."
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
      {/* --- FEATURED EVENTS SECTION --- */}
      <section className="section-white" style={{ padding: '80px 20px' }}>
        <div className="container">
          <div className="section-header centered-text">
            {/* Your Jumpy Header stays here */}
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
            </h1>       <h2 style={{ fontSize: '2rem', marginBottom: '40px', opacity: 0.7 }}>PROPOSED PROGRAMMES 2026</h2>
          </div>

          {/* --- PART A: THE MANUALLY FEATURED 3 --- */}
          <div className="featured-grid">
            {featuredEvents
              .filter(event => event.isFeatured) // Only shows the 3 you marked
              .map((event) => (
                <div key={event.id} className="event-card featured">
                  <div className="card-image-wrap">
                    <img src={event.image} alt={event.title} />
                    <div className="date-badge">
                      <span className="date-month">{event.date.split(' ')[0]}</span>
                      <span className="date-day">{event.date.split(' ')[1]}</span>
                    </div>
                  </div>
                  <div className="card-details">
                    <h3>{event.title}</h3>
                    <p>{event.desc}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* --- PART B: THE FULL CHRONOLOGICAL SCHEDULE --- */}
          <div className="timeline-list">
            <h3 className="list-label">Full Semester Itinerary</h3>
            {featuredEvents.map((event) => ( // Shows everything in order
              <div key={event.id} className="timeline-row">
                <div className="timeline-date">
                  <strong>{event.date}</strong>
                </div>
                <div className="timeline-content">
                  <h4>{event.title}</h4>
                  <span className="timeline-time">{event.time}</span>
                </div>
                <div className="timeline-desc">{event.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}