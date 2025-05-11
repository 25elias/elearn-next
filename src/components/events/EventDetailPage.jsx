import EventDetail from './EventDetail'
import MoreEvents from './MoreEvents'
import SideBarEvent from './SideBarEvent'

function EventDetailPage() {
  return (
    <div>
        <div className='flex gap-4 w-full h-full'>
            <EventDetail />
            <SideBarEvent />
        </div>
        <MoreEvents />
    </div>
  )
}

export default EventDetailPage