import React from "react";

export default function Stories() {
  return (
    <div className="flex space-x-6 px-6">
      <div>
        <img
          src="https://images.unsplash.com/photo-1676153838100-c571de2bdf29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80"
          alt="story"
          className="z-10 hidden h-14 w-14 cursor-pointer rounded-full border-[3px] border-pink-400 object-cover hover:border-sky-400 lg:block"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1676132147501-ad137cf94443?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="story"
          className="z-10 h-14 w-14 cursor-pointer rounded-full border-[3px] border-pink-400 object-cover hover:border-sky-400"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="story"
          className="z-10 h-14 w-14 cursor-pointer rounded-full border-[3px] border-pink-400 object-cover hover:border-sky-400"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
          alt="story"
          className="z-10 h-14 w-14 cursor-pointer rounded-full border-[3px] border-gray-200 object-cover opacity-75 hover:border-sky-400"
        />
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80"
          alt="story"
          className="z-10 hidden h-14 w-14 cursor-pointer rounded-full border-[3px] border-gray-200 object-cover opacity-75 hover:border-sky-400 lg:block"
        />
      </div>
    </div>
  );
}
