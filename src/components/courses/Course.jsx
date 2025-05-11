import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa6";
import { MdThumbUpOffAlt } from "react-icons/md";




const Course = ({courses}) => {
  return (
       <div className="space-y-20">
         {courses.map(course => {
           return (
             <div key={course.path} className="flex flex-col sm:flex-row items-center border border-gray-300 rounded-b-3xl sm:rounded-r-3xl sm:items-start justify-between gap-4">
               <div className="w-full sm:w-2/3 h-full sm:min-h-[250px] ">
                 <img src={course.image} alt={course.title} className="w-full h-full" />
               </div>
               <div className="w-full h-min-content space-y-4 px-8 py-8 sm:py-4">
                 <Link href={course.path} className="text-2xl text-gray-800 font-bold  hover:underline underline-offset-3">{course.title}</Link>
                 <span className="text-green-500 font-bold pl-24">{course.credit}</span>
                 <br />
                 <br />
                 <span className="text-sm text-gray-600">
                   By {course.author} | {course.release_date}
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
                    {course.content || 
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum...
                    
                    </p> }
                </p>
                 
                 {/* author Info */}
                 <div className="flex  items-center justify-between gap-4">
                    <div className="flex item-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img src={course.avatar} className=" w-full h-full border overflow-hidden rounded-full" alt="Mr. Abdi" />
                        </div>
                        <p className="text-sm font-semibold cover text-gray-600">
                            {course.author} <br />
                            <span className="font-medium">Materials</span>
                        </p>
                    </div>
                    <div className="flex items-center text-yellow-600">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                 </div>
               </div>
             </div>
           );
         })}
       </div>
  )
}

export default Course