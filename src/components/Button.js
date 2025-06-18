import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  "All", "Music", "Gaming", "Cricket", "Live", "News", "ReactJS", 
  "Frontend", "Trailers", "Comedy", "Podcasts", "Sports", "Shorts","Dance","MuftiMenk","islamic","cooking","Tollywood"
];

const Buttons = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState("All");

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
  };

  return (
    <div className="   w-full bg-white shadow-md py-2 px-2">
    
      {/* Left Arrow */}
      <button
        onClick={() => scroll(-200)}
        className=" absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Category Buttons */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar whitespace-nowrap px-8"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActive(category)}
            className={`inline-block mx-1 px-4 py-2 rounded-full text-sm font-medium 
              ${active === category 
                ? 'bg-black text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-black'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll(200)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Buttons;
