import { FaRegBuilding } from "react-icons/fa6";
import { MdApartment, MdCabin,  MdHome,  MdOutlineBed, MdOutlineBungalow, MdOutlineHome, MdOutlineVilla,  MdOutlineEmojiEvents, MdOutlineBeachAccess,  } from "react-icons/md";
import Link from "next/link";



const categories = [
    {"title": "Appartments", "Icon": <FaRegBuilding className='w-5 h-5 text-gray-600'/>},
    {"title": "Bungalows", "Icon": <MdOutlineBungalow className='w-5 h-5 text-gray-600'/>},
    {"title": "Cabins", "Icon": <MdCabin className='w-5 h-5 text-gray-600'/>},
    {"title": "Condos", "Icon": <MdApartment className='w-5 h-5 text-gray-600'/>},
    {"title": "Vilas", "Icon": <MdOutlineVilla className='w-5 h-5 text-gray-600'/>},
    {"title": "Loft Rooms", "Icon": <MdHome className='w-5 h-5 text-gray-600'/>},
    {"title": "Entire Home", "Icon": <MdOutlineHome className='w-5 h-5 text-gray-600'/>},
    {"title": "Private Room", "Icon": <MdOutlineBed className='w-5 h-5 text-gray-600'/>},
    {"title": "Events Suitable", "Icon": <MdOutlineEmojiEvents className='w-5 h-5 text-gray-600'/>},
    {"title": "Beachfront", "Icon": <MdOutlineBeachAccess className='w-5 h-5 text-gray-600'/>},
];

const Categories = () => {
    return(
        <div className='pt-15 bg-gray-100 w-full h-full pb-4 '>
            <div className='max-w-5xl mx-auto px-10 '>
                <p className="uppercase text-xs text-gray-800 text-center mb-2">The properties for your next vacation</p>
                <p className="text-2xl text-gray-900 tracking-wide text-center mb-8 mt-4">A Unique Maldives Experience</p>
                <ul className="flex flex-wrap items-center justify-center gap-6 ">
                    {categories.map(category => {
                        return(
                            <li key={category.title} >
                                <Link href={category.title} className="space-y-2 flex flex-col items-center text-center mb-2">
                                    <span>{category.Icon}</span>
                                    <p className="text-sm text-gray-700">{category.title}</p>
                                </Link>
                            </li>
                        )
                        }
                    )}
                </ul>
            </div>
        </div>
    )
 };

 export default Categories;