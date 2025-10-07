import { FaRegBuilding } from "react-icons/fa6";
import { MdOutlineBungalow, MdCabin, MdApartment, MdOutlineVilla, MdHome, MdOutlineHome, MdOutlineBed, MdOutlineEmojiEvents, MdOutlineBeachAccess } from "react-icons/md";


const features = [
  {"title": "Private heaven for",content: "you and your loved once for the whole holiday.", "Icon": <FaRegBuilding className='w-5 h-5 text-gray-600'/>},
  {"title": "Bungalows",content: "you and your loved once for the whole holiday.", "Icon": <MdOutlineBungalow className='w-5 h-5 text-gray-600'/>},
  {"title": "Cabins",content: "you and your loved once for the whole holiday.", "Icon": <MdCabin className='w-5 h-5 text-gray-600'/>},
  {"title": "Condos",content: "you and your loved once for the whole holiday.", "Icon": <MdApartment className='w-5 h-5 text-gray-600'/>},
  {"title": "Vilas",content: "you and your loved once for the whole holiday.", "Icon": <MdOutlineVilla className='w-5 h-5 text-gray-600'/>},
  {"title": "Loft Rooms",content: "you and your loved once for the whole holiday.", "Icon": <MdHome className='w-5 h-5 text-gray-600'/>},
  {"title": "Entire Home",content: "you and your loved once for the whole holiday.", "Icon": <MdOutlineHome className='w-5 h-5 text-gray-600'/>},
  {"title": "Private Room",content: "you and your loved once for the whole holiday.", "Icon": <MdOutlineBed className='w-5 h-5 text-gray-600'/>},
  {"title": "Events Suitable",content: "you and your loved once for the whole holiday.", "Icon": <MdOutlineEmojiEvents className='w-5 h-5 text-gray-600'/>},
  {"title": "Beachfront",content: "you and your loved once for the whole holiday.", "Icon": <MdOutlineBeachAccess className='w-5 h-5 text-gray-600'/>},
];


export default function Feature(){
  return (
    <div className=" pb-14 wrapper">
      <Headlines />
      <ul className="w-full h-full flex flex-wrap justify-center gap-6 p-0 pt-4">
            {features.map(feature => {
                return(
                    <li key={feature.title} >
                        <div className="flex items-start gap-2 max-w-[120px]">
                            <span>{feature.Icon}</span>
                            <div>
                              <p className="text-sm text-gray-700 p-0">{feature.title}</p>
                              <p className="text-xs text-gray-600 p-0">{feature.content}</p>
                            </div>

                        </div>
                    </li>
                )
                }
            )}
      </ul>
    </div>
  );
};


// Headline
export function Headlines(){
  return(
    <div>
      <p className="uppercase text-xs text-gray-800 text-center">Next-Level vacation properties awaits you</p>
      <p className="text-2xl text-gray-900 tracking-wide capitalize text-center mb-8 mt-4">What to Expect From Our Properties</p>
    </div>
  );
};
