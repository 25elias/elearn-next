
async function getEvents(eventId) {
  const res = await fetch(`/events/api/event/${eventId}`);
  return await res.json();
} 

const EventItem = async ({params}) => {
  const eventId = await params.id;
  const event = await getEvents(eventId);
  console.log(event);

  return (
    <div className='pt-8'>
      {/* <h3>{title}</h3>
      <p>{author}</p> */}
      <h2>Event Id is: {params.id}</h2>
    </div>
  )
}

export default EventItem;