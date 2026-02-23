import "../styles/global.css";
import "../styles/give.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
<div className="decorative-container1">
  <div className="wrapper">
<main className="content">

  {/* <!-- Our Identity --> */}
  <section className="section identity">
    <h2>Our Identity</h2>
    <p>Achievers University Baptist Student Fellowship (AU-BSF) is a community of students united by one purpose: <strong>to know Christ and to make Him known</strong> in our university and beyond.</p>
  </section>

  {/* <!-- Mission --> */}
  <section className="section mission">
    <h2>Our Mission</h2>
    <ul>
      <li>Encourage students to build a personal relationship with Jesus Christ.</li>
      <li>Create a supportive community where everyone is seen, known, and valued.</li>
      <li>Equip young believers with biblical truth, spiritual discipline, and godly character.</li>
      <li>Shine the light of Christ on campus through service, outreach, and discipleship.</li>
    </ul>
  </section>

  {/* <!-- Beliefs --> */}
  <section className="section beliefs">
    <h2>Our Beliefs</h2>

    <div className="belief">
      <h3>God’s Word</h3>
      <p>We believe the Bible is God’s inspired Word—our guide for faith and life.</p>
      <blockquote>“Your word is a lamp to my feet and a light to my path.” — Psalm 119:105</blockquote>
    </div>

    <div className="belief">
      <h3>Salvation Through Christ</h3>
      <p>We believe salvation comes only through Jesus Christ, who died and rose again for eternal life.</p>
      <blockquote>“For God so loved the world…” — John 3:16</blockquote>
    </div>

    <div className="belief">
      <h3>The Holy Spirit</h3>
      <p>We believe the Holy Spirit empowers and transforms the lives of believers daily.</p>
    </div>

    <div className="belief">
      <h3>Christian Community</h3>
      <p>We believe believers grow best in fellowship, accountability, and shared worship.</p>
      <blockquote>“As iron sharpens iron, so one person sharpens another.” — Proverbs 27:17</blockquote>
    </div>

    <div className="belief">
      <h3>Purposeful Living</h3>
      <p>We believe every student has a God-given calling, and AU-BSF exists to help them walk in it.</p>
    </div>
  </section>

  {/* <!-- Activities --> */}
  <section className="section activities">
    <h2>What We Do</h2>
    <div className="activity-grid">
      <div className="activity">
        <h3>Weekly Services</h3>
        <p>Worship, prayer, and teaching to encounter God and grow spiritually.</p>
      </div>
      <div className="activity">
        <h3>Small Groups</h3>
        <p>Interactive gatherings for accountability, study, and discipleship.</p>
      </div>
      <div className="activity">
        <h3>Prayer Meetings</h3>
        <p>Dedicated sessions to stand in prayer for our campus, lives, and the world.</p>
      </div>
      <div className="activity">
        <h3>Outreach & Missions</h3>
        <p>Evangelism and community service that spreads the love of Christ.</p>
      </div>
      <div className="activity">
        <h3>Events & Fellowships</h3>
        <p>Social gatherings, picnics, and special programs that strengthen our community.</p>
      </div>
    </div>
  </section>

  {/* <!-- Get Started --> */}
  <section className="section get-started">
    <h2>Get Started on Your Faith Journey</h2>
    <p>You don’t have to walk alone. Whether new to faith or seeking to grow deeper, we’re here to guide you.</p>
    <ul>
      <li>Attend a service</li>
      <li>Join a small group</li>
      <li>Speak to a leader or mentor</li>
      <li>Start reading the Bible with a guided plan</li>
      <li>Ask questions freely—no topic is off limits</li>
    </ul>
    <blockquote>“But grow in the grace and knowledge of our Lord and Savior Jesus Christ.” — 2 Peter 3:18</blockquote>
  </section>
</main>
</div>
</div>
  );
}
