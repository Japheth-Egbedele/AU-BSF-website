import React from 'react';
// Assuming you have an Icon component or are using a library like react-icons

// We'll use a placeholder for the clock icon (you can replace this with an SVG or an icon library)
const ClockIcon = () => (
    <svg 
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#000000" // Black icon stroke
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const EventCard = ({ title, day, time, location }) => (
    <div className="event-card">
        <div className="event-icon">
            <ClockIcon />
        </div>
        <h3 className="event-title">{title}</h3>
        <p className="event-day">{day}</p>
        <p className="event-time">{time}</p>
        <p className="event-location">{location}</p>
    </div>
    
);

const EventsSchedule = () => {
    // Data structured similarly to the example image
    const events = [
        { title: "Sunday School", day: "Sunday", time: "08:00 AM", location: "Main Building" },
        { title: "Worship Service", day: "Sunday", time: "06:00 AM", location: "Main Building" },
        { title: "Bible Study", day: "Tuesday", time: "9:30 PM", location: "Main Building" },
        { title: "Brother's Retreat", day: "Wednesday", time: "6:30 PM", location: "Youth Room" },
        { title: "Prayer Meeting", day: "Thursday", time: "09:00 PM", location: "Tennis Court" },
        { title: "New Month Fasting and Prayer", day: "Wednesday", time: "9:00 PM", location: "Tennis Court" },
    ];

    return (
        <section className="events-schedule-section">
            <h1>Our Weekly Schedule</h1>
            <div className="schedule-container">
                {events.map((event, index) => (
                    <EventCard 
                        key={index} 
                        title={event.title}
                        day={event.day}
                        time={event.time}
                        location={event.location}
                    />
                ))}
            </div>
                  <h2 className='Alphabet'>Join us for one of our regular events!  <div className='underline'></div></h2>
        </section>
    );
}

export default EventsSchedule;