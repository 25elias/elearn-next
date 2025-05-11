import { FaPeopleArrows, FaPerson } from "react-icons/fa6";
import { MdBook } from "react-icons/md";



export default function Feature(){
  return (
    <div className="text-center pb-14 wrapper">
      <h2 className="text-gray-900 mb-8">Features</h2>
      <div className="flex flex-col items-center gap-15 sm:flex-row sm:justify-between md:gap-4">
        <div className="text-left flex items-center gap-2">
          <MdBook className="w-15 h-15 text-green-500" />
          <h3>
            20k+
            <br />
            <span>Books in Library</span>
          </h3>
        </div>
        <div className="text-left flex items-center gap-2">
          <FaPeopleArrows className="flex w-15 h-15 text-green-500" />
          <h3>
            2k+
            <br />
            <span>Students</span>
          </h3>
        </div>
        <div className="text-left flex items-center gap-2">
          <FaPerson className="w-15 h-15 text-green-500" />
          <h3>
            20k+
            <br />
            <span>Books in Library</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
