import React from "react";
import FaqPage from "@/components/faq/FaqPage";
import Footer from "@/components/Footer";

function FAQ() {
  return (
    <div>
      <p className="text-3xl font-semibold pt-4 text-center my-12 text-gray-800">Frequently Asked Questions</p>
      <FaqPage />
      <Footer />
    </div>

  );
}

export default FAQ;