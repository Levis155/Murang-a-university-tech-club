import "./EventsSection.css";
import TitleRight from "../TitleRight/TitleRight";
import { FaClock, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import eventsData from "../../Data/eventsData";

interface EventCardProps {
  eventDay: string;
  eventExcerpt: string;
  eventTime: string;
  eventTitle: string;
  eventVenue: string;
  eventLead: string;
  dayStyle: string;
  eventTitleStyle: string;
}

function EventsSection() {
  return (
    <section className="events-section">
      <div className="events-title">
        <TitleRight subTitle="be part of the action" mainTitle="events" />
      </div>

      <div className="events-cards-container">
        {eventsData.map((data) => (
          <EventCard
            key={data.eventTitle}
            eventDay={data.eventDay}
            eventTitle={data.eventTitle}
            eventExcerpt={data.eventExcerpt}
            eventTime={data.eventTime}
            eventVenue={data.eventVenue}
            eventLead={data.eventLead}
            dayStyle={data.dayStyle}
            eventTitleStyle={data.eventTitleStyle}
          />
        ))}
      </div>
    </section>
  );
}

function EventCard({
  eventDay,
  eventExcerpt,
  eventTime,
  eventTitle,
  eventVenue,
  eventLead,
  dayStyle,
  eventTitleStyle,
}: EventCardProps) {
  return (
    <div className="events-card">
      <div className={dayStyle}>
        <p>{eventDay}</p>
      </div>

      <div className="event-details">
        <p className={eventTitleStyle}>{eventTitle}</p>

        <p className="event-excerpt">{eventExcerpt}</p>

        <div className="event-icons">
          <div className="icon-cont">
            <FaClock />
            <p className="icon-label">{eventTime}</p>
          </div>

          <div className="icon-cont">
            <FaLocationDot />
            <p className="icon-label">{eventVenue}</p>
          </div>

          <div className="icon-cont">
            <FaUser />
            <p className="icon-label">{eventLead}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsSection;
