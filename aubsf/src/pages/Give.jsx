import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/give.css";
export default function Give() {
  return (
<div className="wrapper">
    {/* <!-- Page Replica Section --> */}
<section className="replica-section">
  <div className="hero-replica">
    <br /><br /><br /><br /><br /><br /><br />
    <h2>"For all things come from You, and of your own we have given you."</h2>
    <p><em>1 Chronicles 29:14</em></p>
    <div className="replica-content">
      <h3>Support the Ministry of AU-BSF</h3>
      <p>We invite you to partner with us in spreading truth, beauty, and goodness through your generous giving.</p>
      <br /><br /><br /><br /><br />
     </div>
  </div>
</section>
{/* <!-- Ways to Give Section --> */}
<section className="ways-to-give">
  <div className="give-container">
    <h2>Ways to Give</h2>
    <p>If you are interested in leaving a bequest to AU-BSF, please contact us at <a href="mailto:aubsf@gmail.com">aubsf@gmail.com</a> or call +234-906-85696.</p>
{/* <!-- For donations and tithes and offerings be very specific --> */}
    <div className="give-method">
      {/* <i className="bx bx-bank"></i>  <!-- Add this icon line --> */}
      <h3>Direct Deposit</h3>
      <p><strong>AU-BSF Church Account</strong><br />
      BSB: 032 032<br />
      A/N: 811 496</p>
    </div>
    
    <div className="give-method">
      {/* <i className="bx bx-credit-card"></i>  <!-- Add this icon line --> */}
      <h3>Cheque</h3>
      <p>Payable to <strong>AU-BSF Church</strong><br />
      Post: Law Building className IV, Achievers University Campus, Owo, Ondo State, Nigeria</p>
    </div>
  </div>
</section>
</div>
  );
}
