// "use client"
// import { useEffect } from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa6";
import { MdThumbUpOffAlt } from "react-icons/md";
import api from '@/app/events/api'



 const EventPage = async (props) => {
  let events = await api; 


 {/*  const fecthEvents = async () => {
  //   let url = './app/api/event_api';


  //   const response = await fecth(url);
  //   const data = await response.json();
  //   const events = data.json();

  //   console.log(events);

  // }

  // useEffect(() => {
  //   fecthEvents();
  
  // }, [])*/
   }
  


  return (
    <div className="space-y-24 pt-8 pb-16">
      {events.map(({ title, image, author, release_date, content, path, id }) => (
          <div key={path} className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-10 md:gap-4">
            <div className="w-full sm:w-2/3 h-full ">
              <img src={image} alt={title} />
            </div>

            <div className="w-full h-min-content space-y-4">
              <Link href={`/events/event/${id}`} className="text-gray-800 font-bold hover:underline underline-offset-3">{title}</Link>
              <br />
              <span className="text-sm text-gray-600">
                By {author} | {release_date}
              </span>
              <span className="flex items-center gap-4 text-gray-600">
                  
                  <span className="flex items-center gap-1 text-sm">
                      <FaEye />
                      <p>10</p>
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                      <MdThumbUpOffAlt />
                      <p>4</p>
                  </span>
              </span>
              <p className="text-sm text-gray-700 tracking-wide font-medium mb-10">
                  {content || 
                  <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  placeat numquam error iure, ipsa non nam. Voluptate unde quidem
                  facere labore? Sed pariatur rem ipsam recusandae facilis dolore
                  molestias perspiciatis?
                  </span> }
              </p>
              <Link href={`/events/event/${id}`} className="btn-cta">Read More</Link>
            
            </div>
          </div>
 
))};
</div>

 )}
export default EventPage;