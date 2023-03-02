import { useEffect, useMemo } from "react";
import Status from "../Status/Status";
import Posts from "../Posts/Posts";
import useData from "../../hooks/useData";
import Stories from "../Stories/Stories";
import SamplePosts from "../Posts/SamplePosts";

export default function Feed() {
  const {
    posts,
    profile,
    fetchPosts,
    fetchProfile,
    sendPost,
    content,
    setContent,
  } = useData();

  useEffect(() => {
    fetchPosts();
    fetchProfile();
  }, []);

  const memoizedPosts = useMemo(() => posts, [posts]);
  const memoizedProfile = useMemo(() => profile, [profile]);

  return (
    <div className="flex w-full flex-col items-center space-y-4 overflow-y-auto px-4 pt-8 scrollbar-hide">
      <div className="mb-4">
        <Stories />
      </div>
      <div className="w-full">
        <Status
          profile={memoizedProfile}
          content={content}
          sendPost={sendPost}
          setContent={setContent}
        />
      </div>

      <div className="max-w-6xl">
        {memoizedPosts?.length > 0 &&
          memoizedPosts.map((post) => (
            <Posts
              key={post.id}
              post={post}
              profile={profile}
              fetchProfile={fetchProfile}
            />
          ))}
      </div>

      <SamplePosts />
    </div>
  );
}
