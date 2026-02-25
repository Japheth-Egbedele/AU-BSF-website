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
    title: "Hostel Visitation",
    date: "MAR 21",
    time: "Evening",
    image: EvangelismImg, // Using your Team placeholder
    desc: "Hostel publicity and visitation for second semester resumption."
  },
  {
    id: 2,
    title: "Excos’ Retreat",
    date: "MAR 27-28",
    time: "8:00 PM",
    image: PastorImg,
    desc: "A weekend of prayer and planning for the leadership team."
  },
  {
    id: 3,
    title: "Health Sunday",
    date: "APR 12",
    time: "9:00 AM - 11:30 AM",
    image: TeamImg,
    desc: "Prioritizing our physical and spiritual well-being."
  },
  {
    id: 4,
    title: "Workers’ Retreat",
    date: "APR 17-18",
    time: "Fri: 9PM | Sat: 9AM",
    image: PastorImg,
    desc: "Equipping all workers for the semester's ministry tasks."
  },
  {
    id: 5,
    title: "Cultural Sunday",
    date: "APR 26",
    time: "9:00 AM - 11:30 AM",
    image: BibleImg,
    desc: "Celebrating our diverse heritage. Dress Code: Native Attire."
  },
  {
    id: 6,
    title: "Bible Study Sunday",
    date: "MAY 03",
    time: "9:00 AM - 11:30 AM",
    image: BibleImg,
    desc: "Deep study into the Word as a fellowship family."
  },
  {
    id: 7,
    title: "Welfare Sunday",
    date: "MAY 17",
    time: "9:00 AM - 11:30 AM",
    image: TeamImg,
    desc: "A day of sharing and community support. Dress Code: Casual."
  },
  {
    id: 8,
    title: "Brothers & Sisters Week",
    date: "MAY 25-31",
    time: "See Schedule",
    image: EvangelismImg,
    desc: "A full week of bonding and special activities for all members."
  },
  {
    id: 9,
    title: "Handing Over & FYB Sunday",
    date: "JUN 07",
    time: "9:00 AM - 11:30 AM",
    image: ThanksgivingImg,
    desc: "Celebrating our Final Year Brethren and the transition of leadership."
  },
  {
    id: 10,
    title: "Evangelism Sunday",
    date: "JUN 14", // Added tentative date following the sequence
    time: "9:00 AM - 11:30 AM",
    image: EvangelismImg,
    desc: "Spreading the Gospel across the university campus."
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

    {/* --- PART A: THE BIG 3 (Visual Cards) --- */}
    <div className="featured-grid">
      {featuredEvents.slice(0, 3).map((event) => (
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

    {/* --- PART B: THE FULL SCHEDULE (Minimalist List) --- */}
    <div className="timeline-list">
      <h3 className="list-label">Full Semester Itinerary</h3>
      {featuredEvents.slice(3).map((event) => (
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