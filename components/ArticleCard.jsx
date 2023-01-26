import React from "react";

export default function ArticleCard() {
  return (
    <div class="p-10">
      <div class="hidden w-full lg:flex lg:max-w-full">
        <div
          class="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-60 lg:rounded-t-none lg:rounded-l"
          title="Mountain"
        >
          <img src="https://source.unsplash.com/featured/1200x1200" alt="" />
        </div>
        <div class="flex flex-col justify-between rounded-b border-r border-b border-l border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400">
          <div class="mb-8">
            {/* <p class="flex items-center text-sm text-gray-600">Members only</p> */}
            <div class="mb-2 text-xl font-bold text-gray-900">
              Best Mountain Trails 2020
            </div>
            <p class="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="flex items-center">
            <img
              class="mr-4 h-10 w-10 rounded-full"
              src="/ben.png"
              alt="Avatar of Writer"
            />
            <div class="text-sm">
              <p class="leading-none text-gray-900">John Smith</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
