import Image from "next/image";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function Banner() {
  return (
    <div className="my-8 p-4 bg-slate-50 border border-gray-300">
      <div>
        <span className="text-xs text-gray-800 font-bold tracking-wide uppercase pb-2 text-wrap">
          Need some help or <br />
          want to chat?
        </span>
        <div className="pl-1 mt-2">
          <p className="text-xs text-gray-700 ">maldives@example.com</p>
          <p className="text-xs text-gray-900 mt-1">+251 93 4*** ****</p>
        </div>
      </div>
      {/* Our Listings */}
      <div className="mt-16">
        <span className="text-xs text-gray-700 font-bold tracking-wide uppercase pb-2 text-wrap">
          Our listings
        </span>
        <div className="pl-1 mt-2 ">
          <ul className="w-full h-full text-center sm:text-left flex flex-wrap gap-x-3 sm:flex-col">
            <li>
              <a href=""className="text-xs text-gray-700">Central Island</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Central Island, Masculino</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Gulhfalhu</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Gulhfalhu, Masculino</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Gulhfalhu, Masculino, Male</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Huhule</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Huhule, Masculino</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Hulhumale</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Isla central</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Thilafushi</a>
            </li>
            <li>
              <a href=""className="text-xs text-gray-700">Vilimale</a>
            </li>
          </ul>
          
        </div>
      </div>
      {/* author */}
      <div className="mt-4 px-8 sm:px-0 flex flex-col items-center">
        <div className="rounded-t-2xl overflow-hidden object-center object-cover">
          <Image
          src="/girl_db3.jpg"
          width={250}
          height={290}
          alt="Stephanie Daring"
          className="min-h-[270px] object-center object-cover rounded-t-2xl overflow-hidden"
          />
        </div>
        <div className="rounded-b-2xl overflow-hidden">
          <Image
          src="/signature.png"
          width={250}
          height={100}
          alt="signature"
          className=" object-center object-fill rounded-t-2xl rounded-b-2xl overflow-hidden"
          />
        </div>
        
      </div>
    </div>
  );
}
