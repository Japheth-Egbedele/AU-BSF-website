import EventsSchedule from '../components/EventSchedule';
import "../styles/event.css";
import "../styles/global.css";
import "../styles/footer.css";
import "../styles/navbar.css";
export default function EventsPage() {
  return (
    
<div className="decorative-container1">
    <div className='wrapper'>
      <div>
        <blockquote>
            <p>
                "And let us consider how to stir up one another to love and good works, 
                not neglecting to meet together, as is the habit of some, but encouraging 
                one another, and all the more as you see the Day drawing near."
            </p>
            <p>
                — Hebrews 10:24-25 (ESV)
            </p>
        </blockquote>
    </div>
        <h2>
            Come and Experience the Joy of Fellowship and the Power of the Word.
        </h2>
    </div>
<br /><br />
      
      <EventsSchedule />
 
    </div>
  );
}
