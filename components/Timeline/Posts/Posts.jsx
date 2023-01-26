import React, { useEffect, useState } from "react";

export default function Posts({ post, profile }) {
  const date = new Date(post.created_at);
  const formattedDate = date.toLocaleString();

  return (
    <>
      <div className="w-full md:max-w-2xl">
        <div className="rounded-lg p-5 shadow-md">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://source.unsplash.com/featured/300x300')]">
                <img src={profile?.avatar} alt="" />
              </div>
              <div className="text-lg font-bold"></div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-xs">{formattedDate}</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 text-xl font-bold"></div>
            <div className="text-sm">{post.content}</div>
          </div>

          {/* <div>
            <img src="https://source.unsplash.com/featured/1920x1080" alt="" />
          </div> */}

          <div>
            <div className="flex items-center justify-end">
              <div className="flex space-x-4 md:space-x-8">
                <div className="flex cursor-pointer items-center transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span>125</span>
                </div>

                <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1.5 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
