import { FaPerson, FaReact } from "react-icons/fa6";
import { MdStar } from "react-icons/md";




export default function Different() {
  return (
    <div className="wrapper text-center py-24">
        <h2 className="text-gray-900 ">What Makes Us Different</h2>
        <div className="py-12 flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
        <div className="text-left flex flex-col text-center items-center gap-2">
            <FaReact className="w-15 h-15 text-green-500" />
            <h3>Trending Courses</h3>
            <p className="text-center content max-w-70">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
        </div>
        <div className="text-left flex flex-col text-center items-center gap-2">
            <FaPerson className="w-15 h-15 text-green-500" />
            <h3>Certified Instructors</h3>
            <p className="text-center content max-w-70">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
        </div>
        <div className="text-left flex flex-col text-center items-center gap-2">
            <MdStar className="w-15 h-15 text-green-500" />
            <h3>Certifications</h3>
            <p className="text-center content max-w-70">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
        </div>
        </div>
  </div>
  )
}
