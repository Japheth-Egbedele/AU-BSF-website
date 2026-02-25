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
        { title: "Sunday School", day: "Sunday", time: "08:00 AM", location: "New Nursing building (Smart Class) 300l lecture hall" },
        { title: "Worship Service", day: "Sunday", time: "08:00 AM", location: "New Nursing building (Smart Class) 300l lecture hall" },
        { title: "Bible Study", day: "Tuesday", time: "6:00 PM", location: "New Nursing building (Smart Class) 300l lecture hall" },
        { title: "Brother's and Sister's Retreat", day: "Last Thursday's", time: "4:00 PM", location: "Tennis Court" },
        { title: "Prayer Meeting", day: "Thursday", time: "09:00 PM", location: "Tennis Court" },
        { title: "New Month Fasting and Prayer", day: "First 3 Days Of The Month", time: "9:00 PM", location: "Tennis Court" },
    ];

    return (
        <section className="events-schedule-section">
            <h1 className="section-title disney-font" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <>
                    {"OUR WEEKLY".split("").map((letter, index) => (
                        <span
                            key={index}
                            className="jumpy-letter"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                    <br />
                    {"SCHEDULE".split("").map((letter, index) => (
                        <span
                            key={`schedule-${index}`}
                            className="jumpy-letter"
                            style={{ animationDelay: `${(index + 11) * 0.1}s` }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                </>
            </h1>
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