import { Link } from "react-router";
export default function Home() {
  return (
    <div classNameName="wrapper">
    <header>
      <div className="hero-image">
        <nav className="navpanel" aria-label="Main navigation">
          <div className="nav-container">
            <div className="logo">
              <a href="index.html" id="ollo">
                <img src="./Assets/Logo.png" alt="Logo of AU-BSf" />
                <span>AU-BSF</span>
              </a>
            </div>
            <div className="navbar">
              <a href="">New Here?</a>
              <a href="">Who We Are</a>
              <a href="">Events</a>
              <a href="gallery.html">Gallery</a>
              <a href="give.html">Give</a>
            </div>
          </div>
        </nav>
        {/* <!-- Hamburger Icon for mobile --> */}
        <button className="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false"
          aria-controls="mobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    {/* <!-- Mobile Menu Overlay --> */}
    <div className="mobile-menu" id="mobileMenu" aria-hidden="true">
      <a href="#">New Here?</a>
      <a href="">Who We Are</a>
      <a href="">Events</a>
      <a href="">Gallery</a>
      <a href="">Give</a>
    </div>
<section className="new-here" aria-labelledby="new-here-title">
  <div className="container">

    <div className="new-here-left">
      <h2 id="new-here-title">Welcome — We're Glad You're Here</h2>
      <p className="lead">
        Whether you're exploring faith, returning to church, or looking for a spiritual
        family — you're welcome here. At AU-BSF we gather to worship, learn God's Word,
        and walk life together.
      </p>

      <div className="beliefs">
        <h3>What We Believe</h3>
        <ul>
          <li><strong>God's Love:</strong> God loves you deeply and unconditionally.</li>
          <li><strong>Jesus:</strong> Jesus Christ is Lord and Savior—He restores and frees.</li>
          <li><strong>Scripture:</strong> The Bible guides our life and faith.</li>
        </ul>
      </div>

      <div className="encouragement">
        <h3>You Are Welcome Here</h3>
        <p>
          You don't need to have it all figured out—bring your questions, doubts, and hopes.
          We want to help you take next steps in faith, community, and service.
        </p>
        <blockquote>
          <cite>“Come to me, all who are weary and burdened, and I will give you rest.”</cite>
          <span className="verse">— Matthew 11:28</span>
        </blockquote>
      </div>

      <div className="get-started">
        <h3>Get Started</h3>

        <ol>
          <li><strong>Start with Scripture</strong><br />
              Try a Gospel (Matthew, Mark, Luke, or John). <span className="verse-inline">— Psalm 119:105</span>
          </li>
          <li><strong>Join a Group</strong><br />
              Fellowship groups help you grow through friendship and study.</li>
          <li><strong>Pray & Explore</strong><br />
              Talk to God honestly — He hears you.</li>
        </ol>

        <div className="cta-row">
          <a className="btn primary" href="#plan-visit">Plan Your Visit</a>
          <a className="btn ghost" href="#join-group">Join a Group</a>
        </div>
      </div>
    </div>

    <div className="new-here-right" aria-hidden="false">
      <div className="image-stack" role="img" aria-label="People gathered worshipping and fellowshipping">
        <img src="assets/event-back-2.jpg" alt="" className="stack back back-2" />
        <img src="assets/event-back-1.jpg" alt="" className="stack back back-1" />
        <img src="assets/event-main.jpg" alt="Worship and fellowship at AU-BSF" className="stack main" />
      </div>
    </div>

  </div>
</section>
      </div>
  );
}
