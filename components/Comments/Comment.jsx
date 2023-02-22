import React from "react";

export default function Comment() {
  return (
    <div className="rounded bg-white py-2 shadow-lg">
      <div className="flex flex-col">
        <div className="flex items-center space-x-3">
          <img
            src="https://source.unsplash.com/featured/1920x1080"
            alt=""
            className="h-8 w-8 rounded-full object-cover shadow-lg"
          />
          <span className="font-medium">John Jones</span>
        </div>
        <div>
          <span className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            vitae, atque rem quaerat voluptas, tempora saepe, ipsam mollitia
            reiciendis possimus culpa! Quo quaerat optio adipisci quidem eius
            numquam similique ex.
          </span>
        </div>
      </div>
    </div>
  );
}
