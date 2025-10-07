import React from "react";
import EventPage from "@/components/events/Event";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

function Events() {
  return <div className="wrapper px-8 pt-12">
    <h2 className="text-center mb-10">Events</h2>
    <EventPage />
    <Pagination />
    <Footer />
  </div>;
}

export default Events;