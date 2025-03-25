interface EventsItem {
    eventDay:string;
    eventTitle:string;
    eventExcerpt:string;
    eventTime:string;
    eventVenue:string;
    eventLead:string;
    dayStyle:string;
    eventTitleStyle:string
}

const eventsData:EventsItem[] =[
    {
        eventDay:"mon",
        eventTitle:"cybersecurity session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"4pm - 7pm",
        eventVenue:"computer lab f04",
        eventLead:"webster ifedha",
        dayStyle:"day",
        eventTitleStyle:"event-title"
    },
    {
        eventDay:"tue",
        eventTitle:"ui/ux session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"5pm - 8pm",
        eventVenue:"computer lab f04",
        eventLead:"manase gunga",
        dayStyle:"day-alt-bg",
        eventTitleStyle:"event-title-alt"
    },
    {
        eventDay:"wed",
        eventTitle:"web development session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"6pm - 9pm",
        eventVenue:"computer lab f04",
        eventLead:"carolyn githenduka",
        dayStyle:"day",
        eventTitleStyle:"event-title"
    },
    {
        eventDay:"thu",
        eventTitle:"mobile apps dev session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"4pm - 7pm",
        eventVenue:"computer lab f04",
        eventLead:"stanley amunze",
        dayStyle:"day-alt-bg",
        eventTitleStyle:"event-title-alt"
    },
    {
        eventDay:"fri",
        eventTitle:"cloud engineering session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"3pm - 6pm",
        eventVenue:"computer lab f04",
        eventLead:"paul karanja",
        dayStyle:"day",
        eventTitleStyle:"event-title"
    },
    {
        eventDay:"sat",
        eventTitle:"power platform session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"1pm - 4pm",
        eventVenue:"computer lab f04",
        eventLead:"evyonn mbithe",
        dayStyle:"day-alt-bg",
        eventTitleStyle:"event-title-alt"
    }
]

export default eventsData;