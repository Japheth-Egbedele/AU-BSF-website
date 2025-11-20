import { Link } from "react-router";
export default function Home() {
  return (
<div className="wrapper">

 <div className="spark-bg"></div>

  <section className="gallery-section">

    {/* <!-- CATEGORY 1 --> */}
    <div className="gallery-row">
      <div className="category-card">
        <div className="image-stack">
          <img src="./Assets/service.jpg" className="img-back" alt="" />
          <img src="./Assets/service.jpg" className="img-main" alt="" />
        </div>
        <div className="category-info">
          <h3>Picnics</h3>
          <p>Relaxing moments together as we celebrate community and togetherness.</p>
          <a href="#" className="category-btn">View Gallery</a>
        </div>
      </div>

      {/* <!-- CATEGORY 2 --> */}
      <div className="category-card">
        <div className="image-stack">
          <img src="./Assets/service.jpg" className="img-back" alt="" />
          <img src="./Assets/service.jpg" className="img-main" alt="" />
        </div>
        <div className="category-info">
          <h3>Outreach & Evangelism</h3>
          <p>Going out to share God’s love across campus and in our community. Moments of boldness and compassion.</p>
          <a href="#" className="category-btn">View Gallery</a>
        </div>
      </div>
    </div>

    {/* <!-- CATEGORY 3 & 4 (duplicate this row to add more sections) --> */}
    <div className="gallery-row">
      <div className="category-card">
        <div className="image-stack">
          <img src="your-image.jpg" className="img-back" alt="" />
          <img src="your-image.jpg" className="img-main" alt="" />
        </div>
        <div className="category-info">
          <h3>Sunday Services</h3>
          <p>Weekly gatherings filled with the Word, worship, fellowship, and spiritual growth.</p>
          <a href="#" className="category-btn">View Gallery</a>
        </div>
      </div>

      <div className="category-card">
        <div className="image-stack">
          <img src="your-image.jpg" className="img-back" alt="" />
          <img src="your-image.jpg" className="img-main" alt="" />
        </div>
        <div className="category-info">
          <h3>Choir Ministry</h3>
          <p>A team of passionate worshipers lifting hearts to God through song and music.</p>
          <a href="#" className="category-btn">View Gallery</a>
        </div>
      </div>
    </div>

  </section>

{/* <!-- <section className="event-section">
  <div className="event-container">
    <div className="event-text">
      <h2>Worship Night</h2>
      <p>
        Join us for a night of praise, worship, and fellowship. Experience powerful
        moments with our church family and grow in your relationship with Jesus.
      </p>
      <a href="#" className="learn-more">Learn More</a>
    </div>
    <div className="event-image">
      <div className="image-stack">
        <img src="./Assets/service.jpg" alt="Background Worship" className="back-image">
        <img src="./Assets/service.jpg" alt="Background Choir" className="back-image">
        <img src="./Assets/service.jpg" alt="Main Worship Event" className="main-image">
      </div>
    </div>
  </div>

  <div className="event-container">
    <div className="event-image">
      <div className="image-stack">
        <img src="./Assets/service.jpg" alt="Background Worship" className="back-image">
        <img src="./Assets/gathering.jpg" alt="Background Choir" className="back-image">
        <img src="./Assets/service.jpg" alt="Main Worship Event" className="main-image">
      </div>
    </div>
        <div className="event-text">
      <h2>Worship Night</h2>
      <p>
        Join us for a night of praise, worship, and fellowship. Experience powerful
        moments with our church family and grow in your relationship with Jesus.
      </p>
      <a href="#" className="learn-more">Learn More</a>
    </div>
  </div>
</section> --> */}
</div>
  );
}
