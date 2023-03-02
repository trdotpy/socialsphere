import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import useData from "../../hooks/useData";

export default function Account() {
  const { profile, fetchProfile } = useData();

  useEffect(() => {
    if (!profile) {
      fetchProfile();
    }
  }, []);

  const memoizedProfile = useMemo(() => profile, [profile]);

  return (
    <div className="flex items-center justify-end">
      <span className="text-sm font-medium">{memoizedProfile?.name}</span>
      <div>
        {memoizedProfile && memoizedProfile.avatar && (
          <div class="group block flex-shrink-0">
            <div class="flex items-center">
              <Image
                class="inline-block h-[2.2rem] w-[2.2rem] flex-shrink-0 rounded-full"
                src={memoizedProfile.avatar}
                alt="avatar"
              />
              <div class="ml-3">
                <h3 class="font-semibold text-gray-600">Profile</h3>
                <p class="text-sm font-medium text-gray-400">maria@gmail.com</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
