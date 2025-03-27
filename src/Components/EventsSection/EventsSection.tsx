import "./EventsSection.css";
import TitleRight from "../TitleRight/TitleRight";
import { FaClock, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import eventsData from "../../Data/eventsData";

interface EventCardProps {
  cardId:number;
  eventDay: string;
  eventExcerpt: string;
  eventTime: string;
  eventTitle: string;
  eventVenue: string;
  eventLead: string;
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
            cardId={data.id}
            eventDay={data.eventDay}
            eventTitle={data.eventTitle}
            eventExcerpt={data.eventExcerpt}
            eventTime={data.eventTime}
            eventVenue={data.eventVenue}
            eventLead={data.eventLead}
          />
        ))}
      </div>
    </section>
  );
}

function EventCard({
  cardId,
  eventDay,
  eventExcerpt,
  eventTime,
  eventTitle,
  eventVenue,
  eventLead,
}: EventCardProps) {
  return (
    <div className="events-card">
      <div className={cardId % 2 !== 0 ? "day" : "day-alt-bg"}>
        <p>{eventDay}</p>
      </div>

      <div className="event-details">
        <p className={cardId % 2 !== 0 ? "event-title" : "event-title-alt"}>{eventTitle}</p>

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
