import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import useData from "../../hooks/useData";

export default function Account() {
  const { profile, fetchProfile } = useData();

  useEffect(() => {
    if (!profile) {
      fetchProfile();
    }
  }, [profile, fetchProfile]);

  const memoizedProfile = useMemo(() => profile, [profile]);

  return (
    <div className="flex items-center justify-end">
      <span className="text-sm font-medium">{memoizedProfile?.name}</span>
      <div>
        {memoizedProfile?.avatar ? (
          <button className="flex h-14 w-14 flex-row items-center rounded-lg px-3 text-gray-700">
            <span className="flex items-center justify-center text-lg text-gray-400">
              <Image
                src={memoizedProfile.avatar}
                className="h-8 w-8 rounded-full object-cover shadow-md"
                height={32}
                width={32}
                alt="profile-pic"
              />
            </span>
          </button>
        ) : (
          <button className="flex h-14 w-14 flex-row items-center rounded-lg px-3 text-gray-700">
            <span className="flex items-center justify-center text-lg text-gray-400">
              <Image
                src="https://res.cloudinary.com/drij60fru/image/upload/v1677951897/Social%20Network%20App/social_y7j4we.svg"
                className="h-8 w-8 rounded-full object-cover shadow-md"
                height={32}
                width={32}
                alt="profile-pic"
              />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
