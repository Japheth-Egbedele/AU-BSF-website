import "../styles/global.css";
import "../styles/give.css";

export default function Give() {
  return (
    <div className="decorative-container1">
      <div class= "wrapper">
        <br /><br /><br />
          <div className="give-hero-content">
          <h2>"For all things come from You, and of your own we have given you."</h2>
          <p><em>1 Chronicles 29:14</em></p>
        </div>
      </div>
      <br /><br />

      <section className="Support">
            <h3>Support the Ministry of AU-BSF</h3>
            <div className="underline"></div>
            <p>We invite you to partner with us <br />in spreading truth, beauty, and goodness <br /> through your generous giving.</p>
      </section>

      <section className="ways-to-give">
          <h2>Ways to Give</h2>
          <div className="underline"></div>
        <div className="give-container">
      <p>
        If you are interested in leaving a bequest to AU-BSF, please contact us at  
<a href="mailto:aubsf@gmail.com"> aubsf@gmail.com </a> 
  or call 
  <a href="tel:+2347877559080"> +234 705 755 8080 </a>        {/* The original <span> is removed */}
      </p>

          <div className="give-method">
            <h3>Direct Deposit</h3>
            <i class='bx  bx-credit-card-alt'></i> 
            <p><strong>AU-BSF Church Account</strong><br />
            MONIE POINT<br />
            5005 4317 57 <br />Susan Ibiloye Oyediran </p>
          </div>
            <div className="give-method">
            <h3>In Person</h3>
            <i class='bx  bx-user'></i> 
            <p>Give during Sunday morning worship or any of our midweek services.</p>
          </div>
        </div>
      </section>
      <br /><br />
    </div>
  );
}