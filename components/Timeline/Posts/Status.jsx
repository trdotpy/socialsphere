import React, { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Status() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [profile, setProfile] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((result) => {
        setProfile(result.data?.[0]);
      });
  }, [session?.user?.id]);

  function sendPost(e) {
    e.preventDefault();

    supabase
      .from("posts")
      .insert({
        author: "17673fc9-1262-446c-b822-e2279a0ca95f",
        content,
      })
      .then((response) => {
        console.log(response);
        setContent("");
      });
  }

  return (
    <div className="mx-auto w-full rounded-lg">
      <form className="rounded-lg py-8 shadow md:px-8">
        <div className="flex items-center space-x-4 pr-4 sm:pr-0">
          <img
            src={profile?.avatar}
            className="hidden h-8 w-8 cursor-pointer rounded-full md:block"
          />
          <textarea
            name="message"
            placeholder={`What do you want to say to the world, ${profile?.name}?`}
            className="h-[90px] w-full rounded-lg border border-transparent bg-gray-100 px-2 py-4 text-sm text-black placeholder-gray-400"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <section className="mt-2 flex items-center justify-between space-y-4 px-4 sm:mt-6 sm:px-0 md:justify-between md:space-y-0">
          <div className="flex gap-2">
            <span className="flex h-8 w-8 cursor-pointer items-center rounded-full bg-blue-100 px-2 text-blue-400 transition duration-300 ease-out hover:bg-blue-500 hover:text-white">
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
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </span>

            <span className="flex h-8 w-8 cursor-pointer items-center rounded-full bg-blue-100 px-2 text-blue-400 transition duration-300 ease-out hover:bg-blue-500 hover:text-white">
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>

            <span className="flex h-8 w-8 cursor-pointer items-center rounded-full bg-blue-100 px-2 text-blue-400 transition duration-300 ease-out hover:bg-blue-500 hover:text-white">
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
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </span>
          </div>

          <div className="flex gap-x-3 pb-4 sm:pb-0">
            <button
              className="flex items-center rounded-lg bg-blue-600 py-2 px-5 text-sm text-white shadow-lg"
              onClick={sendPost}
            >
              <span>Send</span>
              <svg
                className="ml-1"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
