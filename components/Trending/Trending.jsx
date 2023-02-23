import React from "react";
import Link from "next/link";
import { trendingData } from "../../data/trendingData";

export default function Trending() {
  return (
    <div className="flex min-h-screen flex-row text-gray-800">
      <div className="w-64 translate-x-full transform transition-transform duration-150 ease-in md:translate-x-0">
        <span className="my-4 flex px-2 font-medium uppercase text-gray-400">
          Trending
        </span>
        {trendingData.map((data) => (
          <div className="mb-8 flex w-full flex-col" key={data.id}>
            <div className="">
              <img
                src={data.image}
                alt="news"
                className="block h-48 rounded-lg object-cover shadow-md"
              />
            </div>

            <div className="space-y-2">
              <Link href="/" className="mt-4 block">
                <h3 className="text-md cursor-pointer hover:underline">
                  {data.title}
                </h3>
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                {/* Save */}
                <button className="flex items-center space-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#4ade80"
                    className="h-5 w-5 hover:text-green-400"
                  >
                    <path
                      fill="#4ade80"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                  <span>{data.saved}</span>
                </button>
                {/* Like */}
                <button className="flex items-center space-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={2.0}
                    stroke="#f87171"
                    className="h-5 w-5 text-gray-800"
                  >
                    <path
                      fill="#f87171"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>

                  <span>{data.likes}</span>
                </button>

                <button className="flex items-center space-x-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 hover:text-sky-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                    />
                  </svg>

                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
