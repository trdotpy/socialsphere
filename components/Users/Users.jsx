import React from "react";
import { suggestedUsers } from "../../data/suggestedUsers";

export default function Users() {
  return (
    <div className="flex flex-row text-gray-800">
      <div className="w-full translate-x-full transform transition-transform duration-150 ease-in md:translate-x-0">
        <ul className="flex w-full flex-col">
          <div className="my-px">
            <span className="my-4 flex px-2 font-medium uppercase text-gray-400">
              Suggested
            </span>
          </div>
          {suggestedUsers.map((profile) => (
            <li
              className="flex cursor-pointer items-center justify-between rounded-lg py-1 transition-colors duration-150 ease-in hover:shadow-lg"
              key={profile.id}
            >
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-700 hover:text-sky-500"
              >
                {/* <span className="flex items-center justify-center"> */}
                <img
                  src={profile.image}
                  alt=""
                  className="h-8 w-8 rounded-full object-cover shadow-lg"
                />
                {/* </span> */}
                <span className="ml-3 text-xs font-medium">{profile.name}</span>
              </a>

              {/* Options */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-gray-300 hover:text-rose-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
