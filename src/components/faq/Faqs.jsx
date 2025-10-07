import { MdOutlineArrowDropDown } from "react-icons/md";

function Faqs() {
  return (
    <div className="h-full w-full mt-8 flex flex-col gap-16">
        {/* Rentals */}
        <div>
            <span className="text-xl text-gray-800 font-medium tracking-wider uppercase ">Rentals</span>
            <div className="flex items-center justify-between p-4 border border-gray-200 mt-6">
                <p className="text-sm text-gray-800 font-normal tracking-wide">Can I do bookings instantly?</p>
                <MdOutlineArrowDropDown className="w-8 h-8"/>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200">
                <p className="text-sm text-gray-800 font-normal tracking-wide">How do I cancel a booking?</p>
                <MdOutlineArrowDropDown className="w-8 h-8"/>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200">
                <p className="text-sm text-gray-800 font-normal tracking-wide">How can I contact you?</p>
                <MdOutlineArrowDropDown className="w-8 h-8"/>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200">
                <p className="text-sm text-gray-800 font-normal tracking-wide">Do you offer pick-up and drop-off?</p>
                <MdOutlineArrowDropDown className="w-8 h-8"/>
            </div>
        </div>
        {/* Payments */}
        <div>
            <span className="text-xl text-gray-800 font-medium tracking-wider uppercase ">Paiments</span>
            <div className="flex items-center justify-between p-4 border border-gray-200 mt-6">
                <p className="text-sm text-gray-800 font-normal tracking-wide">Can I do bookings instantly?</p>
                <MdOutlineArrowDropDown className="w-8 h-8"/>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200">
                <p className="text-sm text-gray-800 font-normal tracking-wide">How do I cancel a booking?</p>
                <MdOutlineArrowDropDown className="w-8 h-8"/>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200">
                <p className="text-sm text-gray-800 font-normal tracking-wide">How can I contact you?</p>
                <MdOutlineArrowDropDown className="w-8 h-8"/>
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200">
                <p className="text-sm text-gray-800 font-normal tracking-wide">Do you offer pick-up and drop-off?</p>
                <MdOutlineArrowDropDown className="w-8 h-8"/>
            </div>
        </div>
    </div>
  )
}

export default Faqs