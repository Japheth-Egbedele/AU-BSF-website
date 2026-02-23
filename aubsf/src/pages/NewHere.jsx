import "../styles/global.css";
import "../styles/give.css";
import { Link } from "react-router-dom";
import EventImg from "../Assets/sheep-o.jpg";
export default function NewHere() {
  return (
    <div className="decorative-container1">
    <div className="wrapper">
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
        <img src={EventImg} alt="Worship and fellowship at AU-BSF" className="stack main" />
      </div>
    </div>

  </div>
</section>
      </div>
    </div>
  );
}
