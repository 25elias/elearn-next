import Image from 'next/image';

const destinations = [
    {title: "Diving", image:"/post-2.jpg"},
    {title: "Surfing", image:"/post-5.jpg"},
    {title: "Sailing", image:"/post-2.jpg"},
    {title: "Paddling", image:"/post-5.jpg"},
];

function Destination() {
  return (
    <div className='wrapper py-14 flex flex-col gap-4 px-10'>
        <p className="uppercase text-xs text-gray-800 text-center">The properties for your next vacation</p>
        <p className="text-2xl text-gray-900 tracking-wide text-center mb-8 mt-4">A Unique Maldives Experience</p>
        <div  className='flex gap-6 min-w-full h-full overflow-x-scroll'>
            {
                destinations.map(({title, image}) => {
                    return(
                        <div key={title} className='w-full h-full relative'>
                            <div className='w-[200px] h-[380px] rounded-md bg-[rgba(0,0,0,0.8)]'>
                                <img src={image} alt={title} 
                                className='w-full h-full cover rounded-md'/>
                            </div>
                            <p className=" text_center ">{title}</p>
                        </div>
                    )
                })
            }
        </div>
    {/* //     <div className=" py-8 px-10 overflow-x-scroll flex md:justify-between gap-8" >
    //       {homeEvents.map(({image, title, content}) => {
             return(
                     <div className=" space-y-4 w-full h-full flex flex-col items-center">
    //                     <div className="w-[200px] h-[200px] sm:h-[200px] ">
    //                         <img className="w-full h-full cover" src={image} alt={title} />
    //                     </div>
    //                     <h3 className="pt-4">{title}</h3>
    //                     <p>{content}</p>
    //                 </div>
    //         )
    //     })}
    //    </div> */}
    </div>
  )
}

export default Destination;