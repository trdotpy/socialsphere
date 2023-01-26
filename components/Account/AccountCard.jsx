import React from "react";

export default function AccountCard() {
  return (
    <div className="border border-blue-500">
      <div className="mx-auto hidden rounded-lg border border-white md:block">
        <div className="h-32 w-full overflow-hidden rounded-t-lg">
          <img
            className="w-full object-cover object-top"
            src="https://source.unsplash.com/featured/300x300"
            alt="Mountain"
          />
        </div>

        <div className="relative mx-auto -mt-16 h-24 w-24 overflow-hidden rounded-full border-2 border-yellow-400">
          <img
            className="h-24 object-cover object-center"
            src="https://source.unsplash.com/featured/300x300"
            alt="user image"
          />
        </div>

        <div className="mt-2 text-center">
          <h1 className="font-semibold">Sarah Smith</h1>
          <p className="text-gray-500">Freelance Web Designer</p>
        </div>

        <div class="flex items-center justify-around py-4">
          <div className="flex flex-col items-center justify-between">
            <span>2,109,412 Followers</span>
          </div>
        </div>

        <div className="mx-auto border-b border-gray-700 pb-4"></div>
      </div>
    </div>
  );
}
