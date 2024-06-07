import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";

const Horizontal = ({ data = [], trending, heading, media_type }) => {
  const scrollContainerRef = useRef();

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -230, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 230, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-8 container mx-auto relative">
      <h2 className="text-white capitalize px-3 mb-2 font-semibold text-xl lg:text-2xl overflow-hidden">
        {heading}
      </h2>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="overscroll-hidden scroll-smooth scrollbar-hide grid grid-cols-[repeat(4,1fr)] gap-4 grid-flow-col overflow-x-scroll"
        >
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index} className="mb-8">
                <Card
                  data={item}
                  index={index}
                  trending={trending}
                  media_type={media_type}
                />
              </div>
            ))}
          <div className="hidden lg:block md:block">
            <button
              onClick={scrollLeft}
              className="absolute text-2xl left-0 z-10 h-full px-2 bg-black/50 text-red-500 rounded-l-lg"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={scrollRight}
              className="overflow-hidden absolute text-red-500 text-2xl right-0 z-10 h-full px-2 bg-black/50 rounded-r-lg"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Horizontal;
