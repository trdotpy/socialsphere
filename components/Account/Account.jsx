import React, { useEffect } from "react";
import useData from "../../hooks/useData";

export default function Account() {
  const { profile, fetchProfile } = useData();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="flex items-center justify-end">
      <span className="text-sm font-medium">{profile?.name}</span>
      <div>
        {profile && profile.avatar && (
          <a
            href="#"
            className="flex h-10 flex-row items-center rounded-lg px-3 text-gray-700"
          >
            <span className="flex items-center justify-center text-lg text-gray-400">
              <img
                src={profile.avatar}
                alt="profile-pic"
                className="h-8 w-8 rounded-xl object-cover shadow-md"
              />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
