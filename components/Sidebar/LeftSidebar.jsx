import React from "react";
import useData from "../../hooks/useData";

export default function LeftSidebar() {
  const { handleSignOut } = useData();

  return (
    <nav className="flex min-h-screen flex-row text-gray-800">
      <div className="w-60 -translate-x-full transform bg-white transition-transform duration-150 ease-in md:translate-x-0 md:shadow">
        <div className="flex items-center justify-center px-12 pt-12 md:justify-between">
          {/* Branding */}
          <div className="inline-flex items-center">
            <span>S</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-sky-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
            <span>CIALPHERE</span>
          </div>
        </div>
        <div className="px-4 py-6">
          {/* Links */}
          <ul className="flex w-full flex-col">
            <li className="my-px">
              <span className="my-4 flex px-4 font-medium uppercase text-gray-400">
                Menu
              </span>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-600 shadow-lg"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-sky-500"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
                <span className="ml-3">Home</span>
              </a>
            </li>

            <li className="my-px">
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 transition-colors duration-150 ease-in hover:text-sky-500 hover:shadow-lg"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </span>
                <span className="ml-3">Blog</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 transition-colors duration-150 ease-in hover:text-sky-500 hover:shadow-lg"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </span>
                <span className="ml-3">Gallery</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 transition-colors duration-150 ease-in hover:text-sky-500 hover:shadow-lg"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <span className="ml-3">People</span>
                <span className="ml-auto flex h-6 items-center justify-center rounded-full bg-red-100 px-2 text-xs font-semibold text-pink-500">
                  38
                </span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 transition-colors duration-150 ease-in hover:text-sky-500 hover:shadow-lg"
              >
                <span className="flex items-center justify-center text-lg text-green-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="ml-3">Invite</span>
              </a>
            </li>
            {/*  */}
            <li className="my-px">
              <span className="my-4 flex px-4 font-medium uppercase text-gray-400">
                Account
              </span>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 transition-colors duration-150 ease-in hover:text-sky-500 hover:shadow-lg"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="ml-3">Profile</span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 transition-colors duration-150 ease-in hover:text-sky-500 hover:shadow-lg"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </span>
                <span className="ml-3">Notifications</span>
                <span className="ml-auto flex h-6 items-center justify-center rounded-full bg-red-100 px-2 text-xs font-semibold text-pink-500">
                  10
                </span>
              </a>
            </li>
            <li className="my-px">
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 transition-colors duration-150 ease-in hover:text-sky-500 hover:shadow-lg"
              >
                <span className="flex items-center justify-center text-lg text-gray-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="ml-3">Settings</span>
              </a>
            </li>

            <button className="my-px" onClick={handleSignOut}>
              <a
                href="#"
                className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-300 transition-colors duration-150 ease-in hover:text-pink-500 hover:shadow-lg"
              >
                <span className="flex items-center justify-center text-lg text-red-400">
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="ml-3">Logout</span>
              </a>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
