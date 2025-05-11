import Link from "next/link";


const homeEvents = [
    {title:"Felix Edesa", image:"/man_dp1.jpg", content:"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum "},
    {title:"Felix Edesa", image:"/man_dp2.jpg", content:"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"},
    {title:"Felix Edesa", image:"man_dp3.jpg", content:"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"},
    {title:"Felix Edesa", image:"/girl_dp1.jpg", content:"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"},
    {title:"Felix Edesa", image:"/girl_db3.jpg", content:"lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"},
];


export default function Events() {
  return (
    <div className="py-24 w-full  h-full text-center space-y-8">
       <h2>Evntes</h2>

       <div className=" py-8 px-10 overflow-x-scroll flex md:justify-between gap-8" >
          {homeEvents.map(({image, title, content}) => {
            return(
                    <div className=" space-y-4 w-full h-full flex flex-col items-center">
                        <div className="w-[200px] h-[200px] sm:h-[200px] ">
                            <img className="w-full h-full cover" src={image} alt={title} />
                        </div>
                        <h3 className="pt-4">{title}</h3>
                        <p>{content}</p>
                    </div>
            )
        })}
       </div>
        <Link href="/events" className="btn-cta">Read more</Link>
    </div>
  )
}
