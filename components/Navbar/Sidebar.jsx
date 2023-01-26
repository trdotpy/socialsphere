import React from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Friends from "../Contacts/Friends";

export default function Sidebar() {
  const supabase = useSupabaseClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  return (
    <div className="flex h-screen w-[100px] flex-col border-r border-gray-700 bg-transparent px-2 py-2 md:w-[250px]">
      <a
        href="#"
        className="flex items-center space-x-3 rounded-md px-2.5 py-1.5 hover:bg-gray-800"
      >
        <div className="flex h-10 w-10 items-center justify-end overflow-hidden rounded-full md:justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </div>
        <div className="hidden flex-col content-start justify-center md:flex">
          <h2 className="font-semibold">Home</h2>
          <div className="flex items-center justify-start space-x-1 text-xs text-green-400">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
            <span>1 new</span>
          </div>
        </div>
      </a>

      <a
        href="#"
        className="flex items-center space-x-3 rounded-md px-2.5 py-1.5 hover:bg-gray-800"
      >
        <div className="flex h-10 w-10 items-center justify-end overflow-hidden rounded-full md:justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
            />
          </svg>
        </div>
        <div className="hidden flex-col content-start justify-center md:flex">
          <h2 className="font-semibold">Pages</h2>
          <div className="flex items-center justify-start space-x-1 text-xs text-green-400">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
            <span>9+ new</span>
          </div>
        </div>
      </a>
      <a
        href="#"
        className="flex items-center space-x-3 rounded-md px-2.5 py-1.5 hover:bg-gray-800"
      >
        <div className="flex h-10 w-10 items-center justify-end overflow-hidden rounded-full md:justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div className="hidden flex-col content-start justify-center md:flex">
          <h2 className="font-semibold">Community</h2>
          <div className="flex items-center justify-start space-x-1 text-xs text-green-400">
            <span className="inline-block h-2 w-2 rounded-full bg-green-400"></span>
            <span>1 new</span>
          </div>
        </div>
      </a>

      <button
        className="flex items-center space-x-3 rounded-md px-2.5 py-1.5 hover:bg-gray-800"
        onClick={handleSignOut}
      >
        <div className="flex h-10 w-10 items-center justify-end overflow-hidden rounded-full md:justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </div>
        <button
          className="flex flex-col content-start justify-center"
          onClick={handleSignOut}
        >
          <h2 className="hidden font-semibold md:block">Log out</h2>
        </button>
      </button>

      <div className="my-2 border-t border-gray-700"></div>

      <div className="hidden items-center space-x-2 rounded-md px-2.5 py-1.5 md:flex">
        <h2 className="font-semibold">Friends</h2>
        <div className="flex items-center justify-start space-x-1 text-xs text-green-400"></div>
      </div>
      <Friends />
    </div>
  );
}
