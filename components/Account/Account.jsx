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
          <button
            className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-700"
            onClick={() => {}}
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              <img
                src={memoizedProfile.avatar}
                alt="profile-pic"
                className="h-8 w-8 rounded-full object-cover shadow-md"
              />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
