import Link from "next/link";
import About from "@/components/home/About";
import Vision from "@/components/home/Vision";
import Features from "@/components/home/Features";
import KeyFigures from "@/components/home/KeyFigures";
import Events from "@/components/home/Events";
import Newsletter from "@/components/home/Newsletter";
import MapGoogle from "@/components/MapGoogle";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    
      <main className="min-h-screen">
        <div className="absolute z-[-10] top-0 left-0 right-0 bottom-[90vh] bg-[url(/about.png)] bg-no-repeat bg-cover w-full h-[90vh]">
          <div className="bg-[rgba(0,0,0,0.5)] w-full h-full text-center flex flex-col items-center text-white text-bold py-28 space-y-4">
            <h1 className="text-3xl pb-2">Programming for Industry</h1>
            <p>Any successful career starts with a good Knowledge</p>
            <Link href='/courses' className="btn-cta flex w-max items-center justify-center mt-10">Learn more</Link>
          </div>
        </div>
        <div className='absolute top-[90vh] left-0 right-0 '>
            <About />
            <Vision />
            <Features />
            <KeyFigures />
            <Events />
            <Newsletter />
            <MapGoogle />
            <Footer />
        </div>
      </main>
    
  );
}
