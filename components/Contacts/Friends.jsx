import React from "react";

const profiles = [
  {
    id: 1714510031,
    name: "Avon Barksdale",
    image:
      "https://images.unsplash.com/photo-1673115540871-53f572a032df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    id: 1714510032,
    name: "Stella McCartney",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 1714510033,
    name: "Duke Deuce",
    image:
      "https://images.unsplash.com/photo-1673120770434-37d148312261?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 1714510034,
    name: "January Jones",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Friends() {
  return (
    <div className="mx-auto w-full flex-col rounded-lg p-2 pb-2 lg:flex">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="">
          {profiles.map((profile) => (
            <div
              className="relative mb-3 flex cursor-pointer items-center justify-center rounded py-2 hover:bg-white md:justify-start md:space-x-2"
              key={profile.id}
            >
              <img
                src={profile.image}
                alt="user"
                className="h-9 w-9 rounded-full shadow-md"
              />

              <div className="absolute right-0 hidden h-5 w-8 rounded-md hover:border lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.0}
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="hidden cursor-pointer text-sm font-medium md:inline-flex">
                {profile.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
