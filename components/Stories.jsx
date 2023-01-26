import Image from "next/image";
import React from "react";

export default function Stories() {
  return (
    <div className="overflow-x grid transform cursor-pointer grid-rows-2 transition duration-200 ease-in hover:scale-105 hover:brightness-110 sm:h-[60px] sm:w-[60px] md:h-20 md:w-20 lg:h-[200px] lg:w-[130px] lg:p-2">
      <div className="flex">
        <div>
          <img
            src="https://source.unsplash.com/featured/300x300"
            alt="profile pic"
            className="z-10 h-14 w-14 rounded-full border-2 border-white object-cover opacity-0 lg:opacity-100"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/featured/400x300"
            alt="profile pic"
            className="z-10 h-14 w-14 rounded-full border-2 border-white object-cover opacity-0 lg:opacity-100"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/featured/300x300"
            alt="profile pic"
            className="z-10 h-14 w-14 rounded-full border-2 border-white object-cover opacity-0 lg:opacity-100"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/featured/300x300"
            alt="profile pic"
            className="z-10 h-14 w-14 rounded-full border-2 border-white object-cover opacity-0 lg:opacity-100"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/featured/300x300"
            alt="profile pic"
            className="z-10 h-14 w-14 rounded-full border-2 border-white object-cover opacity-0 lg:opacity-100"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/featured/300x300"
            alt="profile pic"
            className="z-10 h-14 w-14 rounded-full border-2 border-white object-cover opacity-0 lg:opacity-100"
          />
        </div>
      </div>
    </div>
  );
}
