import {FaRocket, FaJsfiddle} from "react-icons/fa6";
import {FaCss3Alt} from "react-icons/fa";


const Vision = () => {
    return(
        <div className='py-15 bg-gray-100 w-full h-full py-12 '>
            <div className='max-w-5xl mx-auto px-10 flex flex-col md:flex-row md:justify-between gap-8'>
                <div className='p-4 space-y-4 flex flex-col items-center text-center'>
                    <FaRocket className='w-20 h-20' />
                    <span className='text-5xl font-semibold pt-2'>VISION</span>
                    <p className='text-gray-700'>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </div>
                <div className='border-none md:border-x-2 border-gray-400 p-4 space-y-4 flex flex-col items-center text-center'>
                    <FaCss3Alt className='w-20 h-20' />
                    <span className='text-5xl font-semibold pt-2'>MISSION</span>
                    <p className='text-gray-700'>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </div>
                <div className='p-4 space-y-4 flex flex-col items-center text-center'>
                    <FaJsfiddle className='w-20 h-20' />
                    <span className='text-5xl font-semibold pt-2'>VALUES</span>
                    <p className='text-gray-700'>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p>
                </div>
            </div>
        </div>
    )
 };

 export default Vision;