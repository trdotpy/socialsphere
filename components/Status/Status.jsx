import React from "react";

export default function Status({ profile, content, sendPost, setContent }) {
  return (
    <div className="mb-4 w-full rounded-lg bg-white shadow-lg">
      <form className="rounded-lg py-8 md:px-8">
        <div className="flex items-center space-x-4 px-8 sm:px-0">
          <textarea
            name="message"
            placeholder={`Post as: ${profile?.name}`}
            className="h-[45px] w-full rounded-lg border border-transparent bg-gray-100 px-3 py-3 text-sm text-black placeholder-gray-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <section className="mt-2 flex items-center justify-between space-y-4 px-4 sm:mt-6 sm:px-0 md:justify-between md:space-y-0">
          <div className="flex gap-2">
            <div>
              <span className="flex cursor-pointer items-center rounded-full p-2 text-sky-500 transition duration-300 ease-out hover:bg-sky-500 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </span>
            </div>
            <div>
              <span className="flex cursor-pointer items-center rounded-full p-2 text-sky-500 transition duration-300 ease-out hover:bg-sky-500 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
            </div>
            <div>
              {/* Upload image icon */}
              <span className="flex cursor-pointer items-center rounded-full p-2 text-sky-500 transition duration-300 ease-out hover:bg-sky-500 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex gap-x-3 pb-4 sm:pb-0">
            <button
              className="flex items-center rounded-lg bg-sky-500 py-2 px-6 text-sm text-white shadow-lg"
              onClick={sendPost}
            >
              <span className="font-medium">Post</span>
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
