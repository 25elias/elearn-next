"use client"

import { FaAngleLeft, FaAngleRight} from "react-icons/fa6";

const keyFigures = [
    {name:"Felix Edesa", image:"/man_dp1.jpg", title:"Department Head"},
    {name:"Felix Edesa", image:"/man_dp2.jpg", title:"Department Head"},
    {name:"Felix Edesa", image:"man_dp3.jpg", title:"Department Head"},
    {name:"Felix Edesa", image:"/girl_dp1.jpg", title:"Department Head"},
    {name:"Felix Edesa", image:"/girl_db3.jpg", title:"Department Head"},
];


export default function KeyFigures() {

    const handleClick = () => {

    };

  return (
    <div className="py-24 bg-gray-100 w-full h-full py-12 ">
      <div className="relative overflow-x-auto max-w-5xl mx-auto px-10 flex md:justify-between gap-8">
        <button onClick={handleClick} 
        className="absolute top-10 left-8 mr-4 ">
         <FaAngleLeft className="w-6 h-10 text-gray-400 cursor-pointer hover:text-gray-500" />
        </button>
        {keyFigures.map(({name,image,title}) => {
            return(
                <div className=" p-4 space-y-4 flex flex-col items-center text-center">
                    <div className="w-15 h-15 rounded-full">
                        <img className="w-full h-full rounded-full contain" src={image} alt={name} />
                    </div>
                    <h3 className="text-lg  font-semibold pt-1">{name}</h3>
                    <p className="text-sm tracking-wide text-gray-700 font-semibold">
                        {title}
                    </p>
                </div>
            )
        })}

        <button onClick={handleClick} 
        className="absolute top-10 right-8 ml-4 ">
         <FaAngleRight  className="w-6 h-10 text-gray-400 cursor-pointer hover:text-gray-500"/>
        </button>
        </div>
    </div>
  );
}
