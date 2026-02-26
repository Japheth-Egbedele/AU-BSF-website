import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/about.css";

// Images
import GroupPraying from "../Assets/Gallery/pastor.png"; // Replace with actual group image
import PastorImg from "../Assets/Gallery/gallery9.jpg"; // Replace with pastor image
import StoryImg from "../Assets/Online/sample3.jpg";
import TeamImg from "../Assets/Gallery/gallery7.jpg";
import GroupImg from "../Assets/Gallery/executives.png";
import LogoWhite from "../Assets/Logo/logo-p.png";
// Excos
import exco1 from "../Assets/Gallery/gallery7.jpg"; // Olaniyi Abiodun
import exco2 from "../Assets/Gallery/gallery9.jpg"; // Longe Adebimpe
import exco3 from "../Assets/Excos/exco3.jpeg"; // Sarah Aderoju
import exco4 from "../Assets/Excos/exco4.jpeg"; // Oyediran Susan
import exco5 from "../Assets/Excos/exco5.jpeg"; // Obaleye Fadekemi
import exco6 from "../Assets/Excos/exco6.jpeg"; // Oke Oluwamayokun
import exco7 from "../Assets/Gallery/gallery12.jpeg"; // Ajeniyi Grace Aderonke
import exco8 from "../Assets/Gallery/gallery11.jpeg"; // Ojo Kanyinsola Caroline
import exco9 from "../Assets/Excos/exco9.jpeg"; // Olakunle Goodluck
import exco11 from "../Assets/Excos/exco11.jpeg"; // Duyilemi Praise
import exco12 from "../Assets/Gallery/gallery16.jpeg"; // Alao Faith

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBelief = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const beliefs = [
    { title: "THE BIBLE", content: "We believe the Bible is God’s inspired Word—our guide for faith and life." },
    { title: "SALVATION", content: "We believe salvation comes only through Jesus Christ, who died and rose again." },
    { title: "THE TRINITY", content: "We believe in one God existing in three persons: Father, Son, and Holy Spirit." },
    { title: "THE CHURCH", content: "We believe the church is the body of Christ, sent to shine His light." }
  ];
const leaders = [
  { 
    name: "OLANIYI ABIODUN", 
    role: "PRESIDENT", 
    dept: "Nursing Science, 400L", 
    img: exco1 
  },
  { 
    name: "LONGE ADEBIMPE", 
    role: "VICE PRESIDENT", 
    dept: "Human Anatomy, 400L", 
    img: exco2 
  },
  { 
    name: "SARAH ADEROJU", 
    role: "SECRETARY", 
    dept: "Physiotherapy, 200L", 
    img: exco3 
  },
  { 
    name: "OYEDIRAN SUSAN", 
    role: "TREASURER", 
    dept: "Nursing Science, 200L", 
    img: exco4 
  },
  { 
    name: "OBALEYE FADEKEMI", 
    role: "WELFARE / SISTER COORDINATOR", 
    dept: "Nursing Science, 500L", 
    img: exco5 
  },
  { 
    name: "OKE OLUWAMAYOKUN", 
    role: "BROTHERS & ACADEMIC COORDINATOR", 
    dept: "Sociology, 400L", 
    img: exco6 
  },
  { 
    name: "AJENIYI GRACE ADERONKE", 
    role: "PRAYER COORDINATOR", 
    dept: "Nursing Science, 300L", 
    img: exco7 
  },
  { 
    name: "OJO KANYINSOLA CAROLINE", 
    role: "BIBLE STUDY COORDINATOR", 
    dept: "Nursing Science, 300L", 
    img: exco8 
  },
  { 
    name: "OLAKUNLE GOODLUCK", 
    role: "CHOIR COORDINATOR", 
    dept: "Mechatronics Engineering, 400L", 
    img: exco9 
  },
  { 
    name: "DUYILEMI PRAISE", 
    role: "EVANGELISM & VISITATION COORDINATOR", 
    dept: "Medical Laboratory Science, 200L", 
    img: exco11 
  },
  { 
    name: "ALAO FAITH", 
    role: "SUNDAY SCHOOL SUPERINTENDENT", 
    dept: "Nursing Science, 300L", 
    img: exco12 
  }
];
  return (
    <div className="page-wrapper">

      {/* 1. HERO ALTERNATIVE (Split Arch Hero) */}
      <header className="about-hero-alt">
        <div className="container hero-alt-grid">
          <div className="hero-alt-text">
            {/* The elegant script font from the reference */}
            <h4 className="script-accent-hero">About Us</h4>

            {/* The bold, concise identifier */}
            <h1 className="hero-compact-title">WHO ARE WE?</h1>

            {/* A single, punchy line of information */}
            <p id="hero-subtext">
              A student family passionate about Jesus and the AU campus.
            </p>
          </div>
          <div className="hero-alt-image">
            <div className="hero-arch-window" style={{ backgroundImage: `url(${StoryImg})` }}></div>
          </div>
        </div>
      </header>

      {/* 2. SECTION: "You're Not Alone" (Upgraded) */}
      <section className="zig-zag-section">
        <div className="container grid-layout">

          <div className="text-content">
            <div className="accent-line"></div>
            <span className="eyebrow-text text-green">Our Story</span>
            <h2>"You're not alone."</h2>
            <div className="text-body">
              <p>
                That might sound obvious when you live in a city of millions or attend a crowded university.
                But we've felt alone <em>many</em> times before: in our struggles, academic pressures, and
                uncertainties about life's purpose.
              </p>
              <p>
                And we believed those "imperfections" would keep us from building the life we longed
                for or becoming the person we dreamed we could be.
              </p>
              <p className="strong-statement">
                But all of that changed when we met Jesus.
              </p>
            </div>
          </div>

          <div className="image-content">
            {/* The Image Wrapper creates the offset effect */}
            <div className="arch-wrapper">
              <div className="arch-backdrop"></div>
              <div className="arch-image top-arch" style={{ backgroundImage: `url(${GroupPraying})` }}></div>
            </div>
          </div>

        </div>
      </section>

            {/* 5. OUR STORY (Green Background Block) */}
      <section id="story" className="section-olive">
        <div className="container centered-text">
          <div className="icon-logo">
            <img src={LogoWhite} alt="AU-BSF Seal" style={{ width: '50px', opacity: '0.8' }} />
          </div>  
         <h2>OUR STORY</h2>
          <p className="story-text">
            AU-BSF started as a group of people who loved the Lord meeting in classrooms.
            God provided a building for our budding community to meet in—then it grew beyond
            what we imagined. Today, we see a campus filled with the Holy Spirit and hungry for
            the Word.
          </p>
        </div>
      </section>

      {/* 3. SECTION: "Invitation" (Image Left, Text Right - Arch) */}
      <section className="zig-zag-section bg-cream">
        <div className="container grid-layout reverse-layout">
          <div className="image-content">
            <div className="arch-image pill-shape" style={{ backgroundImage: `url(${PastorImg})` }}></div>
          </div>

          <div className="text-content">
            <h2>We invite you to join us at the table with Jesus.</h2>
            <p>
              Don't worry about the “right way” to show up—just pull up a chair and be yourself.
              When you do, you'll never feel alone again.
            </p>
            <p>
              Because at AU-BSF, the path to transformation is <strong>people together with Jesus.</strong>
            </p>
            <Link to="/new-here" className="learn-more">Get Connected</Link>
          </div>
        </div>
      </section>

      {/* 4. PASTORS / LEADERSHIP */}
      <section className="zig-zag-section">
        <div className="container grid-layout">
          <div className="text-content">
            <h2>Meet</h2>
            <h2>OUR LEADERSHIP</h2>
            <p className="lead-text">
              Led by the Holy Spirit, our leadership team is dedicated to serving the students
              and staff of Achievers University with passion and integrity.
            </p>
            <a href="#leadership-team" className="learn-more">Meet The Team</a>          </div>
            <div className="image-content">
              <div className="arch-image-container">
                <img 
                  src={GroupImg} 
                  alt="Leadership Group" 
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '20px' }} 
                />
              </div>
            </div>
        </div>
      </section>

<section id="leadership-team" className="section-white">
      <div className="container centered-text">
        <span className="eyebrow-text">The Family Leads</span>
        <h2 className="section-title">MEET OUR EXCOS</h2>
        
        <div className="exco-slider">
          {leaders.map((leader, index) => (
            <div className="exco-card" key={index}>
              <div className="exco-image-wrapper">
                <img src={leader.img} alt={leader.name} className="exco-img" />
              </div>
              <div className="exco-info">
                <h3>{leader.name}</h3>
                <span className="exco-role">{leader.role}</span>
                <p className="exco-dept">{leader.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* 7. FOOTER CTA */}
      <section className="section-footer-cta">
        <div className="container">
          <h3>Stay Connected</h3>
          <h3>AT AU-BSF</h3>
          <p>Even in a city of millions, it's easy to feel alone. With us, you don't have to.</p>
          <div className="footer-cols">
            <div className="col bg-olive">
              <h3>DISCIPLESHIP</h3>
            </div>
            <div className="col bg-rust">
              <h3>SALVATION</h3>
            </div>
            <div className="col bg-blue">
              <h3>ACADEMIC EXCELLENCE</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bsf-core-philosophy">
  <div className="container">
    <div className="philosophy-header">
      <h4 className="eyebrow-text">Our Philosophy</h4>
      <h2>A Specialized Ministry for Campus Life</h2>
    </div>
    
    <div className="philosophy-content">
      <p>
        The Baptist Student Fellowship (BSF) is an organization of Baptist students, 
        a fellowship of Christian students, and a ministry to <strong>all students</strong>. 
        We respond to the unique nature of campus life by providing a space for 
        redemption, Christian nurture, and leadership development.
      </p>
      
      <div className="motto-box">
        <p className="motto-text">
          "By this all men will know that you are my disciples, if you love one another."
        </p>
        <span className="motto-ref">— John 13:35</span>
      </div>
    </div>
  </div>
</section>

      {/* 6. BELIEFS (Clean List Style) */}
      <section className="section-cream">
        <div className="container centered-text">
          <h2 id="belief-h2">OUR BELIEFS</h2>
          <p className="sub-head">You can read more about what we believe below.</p>

          <div className="accordion-clean">
            {beliefs.map((belief, index) => (
              <div key={index} className="accordion-row">
                <button className="accordion-clean-header" onClick={() => toggleBelief(index)}>
                  {belief.title}
                  <span className="icon-clean">{openIndex === index ? "−" : "+"}</span>
                </button>
                <div className={`accordion-clean-body ${openIndex === index ? "open" : ""}`}>
                  <p>{belief.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}