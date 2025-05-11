
import event_api from '@/app/events/api'

async function getEvent(eventId) {
  const res = await fetch(`/events/api/event/${eventId}`);
  const event = await res.json();
  return event;
} 

const EventItem = async ({pramas}) => {
	// let res = await event_api[props.id];

  const eventId = await params.id;
  const event = await getEvent(eventId);
  console.log(event);

  return (
    <div>
      {/* <h2>{event.title}</h2> */}
      {/* <h2>Event Id is: {props.id}</h2> */}
    </div>
  )
}

export default EventItem;