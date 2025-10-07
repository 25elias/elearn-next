import Link from "next/link";
import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Availables from "@/components/home/Available_Rents";
import Events from "@/components/home/Events";
import Newsletter from "@/components/home/Newsletter";
import MapGoogle from "@/components/MapGoogle";
import Footer from "@/components/Footer";
import Categories from "@/components/home/Categories";
import Destination from "@/components/home/Destination";


export default function Home() {
  return (
    
      <main className="min-h-screen">
        <div className="absolute z-[-10] top-0 left-0 right-0 bottom-[90vh] bg-[url(/about.png)] bg-no-repeat bg-cover w-full h-[90vh]">
          <div className="bg-[rgba(0,0,0,0.5)] w-full h-full text-center flex flex-col items-center text-white text-bold py-28 space-y-4">
            <h1 className="text-xs tracking-normal uppercase pb-2">Stay with us and feel loke home</h1>
            <p className="text-6xl text-white font-semibold capitalize max-w-md te text-wrap">A unique maldives experince</p>
          </div>
        </div>
        <div className='absolute top-[90vh] left-0 right-0 '>
            <About />
            <Categories />
            <Destination />
            <Features />
            <Events />
            <MapGoogle />
            <Availables />
            <Newsletter />
            <Footer />
        </div>
      </main>
    
  );
}
