interface EventsItem {
    id: number
    eventDay:string;
    eventTitle:string;
    eventExcerpt:string;
    eventTime:string;
    eventVenue:string;
    eventLead:string;
}

const eventsData:EventsItem[] =[
    {
        id: 1,
        eventDay:"mon",
        eventTitle:"cybersecurity session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"4pm - 7pm",
        eventVenue:"computer lab f04",
        eventLead:"webster ifedha",
    },
    {
        id: 2,
        eventDay:"tue",
        eventTitle:"ui/ux session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"5pm - 8pm",
        eventVenue:"computer lab f04",
        eventLead:"manase gunga",
    },
    {
        id: 3,
        eventDay:"wed",
        eventTitle:"web development session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"6pm - 9pm",
        eventVenue:"computer lab f04",
        eventLead:"carolyn githenduka",
    },
    {
        id: 4,
        eventDay:"thu",
        eventTitle:"mobile apps dev session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"4pm - 7pm",
        eventVenue:"computer lab f04",
        eventLead:"stanley amunze",
    },
    {
        id: 5,
        eventDay:"fri",
        eventTitle:"cloud engineering session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"3pm - 6pm",
        eventVenue:"computer lab f04",
        eventLead:"paul karanja",
    },
    {
        id:6,
        eventDay:"sat",
        eventTitle:"power platform session",
        eventExcerpt:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at veniam molestiae maxime sequi enim placeat modi neque. Architecto voluptate officiis cum ad saepe repellendus sint. Perferendis reiciendis illum cum?",
        eventTime:"1pm - 4pm",
        eventVenue:"computer lab f04",
        eventLead:"evyonn mbithe",
    }
]

export default eventsData;