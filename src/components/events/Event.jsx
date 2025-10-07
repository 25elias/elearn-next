// "use client"
// import { useEffect } from "react";
import EventSnippet from './EventSnippet';
import events from '../../app/events/api';



 const EventPage = async () => {
  


  return (
    <div className="space-y-24 pt-8 pb-16">
      <EventSnippet events={events} />
    </div>

 )}
export default EventPage;