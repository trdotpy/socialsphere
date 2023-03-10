import { FaHome } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { MdPhotoLibrary, MdSettings } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default function Notifications() {
  return (
    <div className="hidden rounded-lg shadow-md md:block">
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center">
          <div className="grid grid-cols-1 gap-y-4">
            <div className="flex gap-2">
              <img
                src="https://res.cloudinary.com/drij60fru/image/upload/v1669265569/channels4_profile_z2tutm.jpg"
                className="h-9 w-9 rounded-full shadow-md"
              />
              <h3 className="hidden text-sm md:block">
                <span className="font-bold">Cesar Millan</span> sent you a
                friend request.
              </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 md:flex-row">
              <button className="rounded-lg bg-[#1877F2] px-8 py-2 text-sm font-medium text-gray-100 hover:brightness-125">
                Accept
              </button>
              <button className="rounded-lg bg-gray-200 px-8 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
