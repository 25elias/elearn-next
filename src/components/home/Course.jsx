import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";


export default function Course({house}) {
    return(
            <div className="flex">
                <div className="bg-gray-100 py-2">
                    <div className="relative w-[280px] max-h-[200px] rounded-md">
                        <div className="absolute top-4 right-4 text-xs text-white py-1 rounded px-3 bg-gray-400">verified</div>
                        <div className="w-[280px] h-[220px]">
                            <img className="w-full h-full rounded-md overflow-hidden" src={house.image} alt={house.title} />
                        </div>
                        <div className="absolute bottom-[-4] left-4 right-4 flex items-center justify-between">
                            <div className="w-10 h-10" >
                                <img src="/girl_db3.jpg" alt="Owner"
                                className="w-full h-full rounded-full cover border-2  border-white" />
                            </div>
                            <FaRegHeart className="w-5 h-5 text-gray-200" />
                        </div>
                    </div>
                    <div className="mt-4 py-2">
                        <Link href={house.path} className="flex items-center justify-between pt-2">
                            <h4 className="hover:underline">{house.title}</h4>
                            <span className="flex gap-2 items-center"><FaStar className="w-4 h-4" /> 5.00</span>
                        </Link>
                        <p className="text-sm tracking-wide pt-1">{house.title}</p>
                        <p className="text-sm tracking-wide py-2">{house.credit}</p>
                        <p className="text-sm text-slate-500 tracking-wide">&euro; 600</p>
                    </div>
                </div>
            </div>
    )
}