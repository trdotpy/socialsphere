import Link from "next/link";
import React from "react";
import { BiUpvote, BiDownvote, BiShareAlt } from "react-icons/bi";
import { BsChat } from "react-icons/bs";

export default function News() {
  return (
    <div className="mx-auto hidden max-w-xs flex-col border-b p-2 pb-2 lg:flex">
      <div className="space-y-4">
        <img
          src="https://source.unsplash.com/featured/1200x90"
          alt="news"
          className="block h-48 rounded-lg object-cover shadow-md"
        />
        <div className="space-y-2">
          <Link href="/" className="block">
            <h3 className="text-md cursor-pointer font-semibold hover:underline">
              News Headline
            </h3>
          </Link>

          <div className="flex space-x-2 text-sm text-gray-400">
            <button className="flex items-center space-x-1.5 p-1">
              <BsChat className="h-4 w-4" />
              <span>18</span>
            </button>
            <button className="flex items-center space-x-1.5 p-1">
              <BiUpvote className="h-4 w-4" />
              <span>221</span>
            </button>

            <button className="flex items-center space-x-1.5 p-1">
              <BiShareAlt className="h-4 w-4 text-pink-400" />
              <span>Share</span>
            </button>
            <div className="flex items-center text-xs text-gray-400">
              <span>8 min ago</span>
            </div>
          </div>
        </div>
      </div>

     

      {/* <div className="flex flex-col justify-center space-y-4">
        <img
          src="https://source.unsplash.com/featured/800x800"
          alt="news"
          className="block h-24 w-60 rounded-lg object-cover shadow-md"
        />
        <div className="space-y-2">
          <Link href="/" className="block">
            <h3 className="text-md cursor-pointer font-semibold hover:underline">
              News Headline
            </h3>
          </Link>

          <div className="flex space-x-2 text-sm text-gray-400">
            <button className="flex items-center space-x-1.5 p-1">
              <BsChat className="h-4 w-4" />
              <span>18</span>
            </button>
            <button className="flex items-center space-x-1.5 p-1">
              <BiUpvote className="h-4 w-4" />
              <span>221</span>
            </button>
            <button className="flex items-center space-x-1.5 p-1">
              <BiShareAlt className="h-4 w-4 text-pink-400" />
              <span>Share</span>
            </button>
            <div className="flex items-center text-xs text-gray-400">
              <span>8 min ago</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
