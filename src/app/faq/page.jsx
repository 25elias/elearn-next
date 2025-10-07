import React from "react";
import FaqPage from "@/components/faq/FaqPage";
import Footer from "@/components/Footer";

function FAQ() {
  return (
    <div>
      <div className="absolute z-[-10] top-15 left-0 right-0 bottom-[90vh] bg-[url(/about.png)] bg-no-repeat bg-cover w-full h-[90vh]">
          <div className="bg-[rgba(0,0,0,0.5)] w-full h-full text-center flex flex-col items-center text-white text-bold py-28 space-y-4">
            <span className="text-xs font-bold tracking-normal uppercase pb-2">We can always answer your question</span>
            <p className="text-7xl text-white font-bold capitalize max-w-md  text-wrap leading-23">
              Frequently asked questions
            </p>
          </div>
        </div>
        <div className="mt-[90vh]">
          <FaqPage />
          <Footer />
        </div>
    </div>

  );
}

export default FAQ;