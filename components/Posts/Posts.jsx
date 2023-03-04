import React from "react";
import moment from "moment";
import SamplePosts from "./SamplePosts";
import Image from "next/image";

export default function Posts({ post }) {
  const date = new Date(post.created_at);
  const timeAgo = moment(date).fromNow();

  return (
    <div>
      <div className="rounded-lg bg-white p-5 shadow-lg">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-3">
            <div>
              {post.profiles.avatar ? (
                <Image
                  src={post.profiles?.avatar}
                  className="h-8 w-8 rounded-full"
                  height={32}
                  width={32}
                  alt="profile-pic"
                />
              ) : (
                <Image
                  src="https://res.cloudinary.com/drij60fru/image/upload/v1677951897/Social%20Network%20App/social_y7j4we.svg"
                  className="h-8 w-8 rounded-full"
                  height={32}
                  width={32}
                  alt="profile-pic"
                />
              )}
            </div>
            <h2 className="text-sm font-medium">{post.profiles?.name}</h2>
          </div>
          <div className="flex items-center space-x-8">
            <span className="text-xs">{timeAgo}</span>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <span className="text-sm">{post.content}</span>
        </div>
        {/* Actions */}
        <div className="py-2 px-2">
          <div className="flex justify-between">
            {/* Like */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer text-gray-500 hover:text-red-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className="hidden font-medium text-gray-500 md:block">
                Like
              </span>
            </div>
            {/* Comment */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer text-gray-500 hover:text-sky-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>
              <span className="hidden font-medium text-gray-500 md:block">
                Comment
              </span>
            </div>
            {/* Share */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer text-gray-500 hover:text-sky-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                />
              </svg>
              <span className="hidden font-medium text-gray-500 md:block">
                Share
              </span>
            </div>
            {/* Save */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="h-5 w-5 cursor-pointer text-gray-500 hover:text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              <span className="hidden font-medium text-gray-500 md:block">
                Save
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
