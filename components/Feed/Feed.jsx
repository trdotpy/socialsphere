import { useEffect } from "react";
import Status from "../Status/Status";
import Posts from "../Posts/Posts";
import Stories from "../Stories";
import useData from "../../hooks/useData";

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

  return (
    <div className="flex w-full flex-col items-center space-y-4 overflow-y-auto pt-8 scrollbar-hide px-4">
      <div>
        <Stories />
      </div>
      <div>
        <Status
          profile={profile}
          content={content}
          sendPost={sendPost}
          setContent={setContent}
        />
        <div className="space-y-4">
          {posts?.length > 0 &&
            posts.map((post) => (
              <Posts
                key={post.id}
                post={post}
                profile={profile}
                fetchProfile={fetchProfile}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
