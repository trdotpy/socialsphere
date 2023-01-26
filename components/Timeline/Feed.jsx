import { useEffect, useState } from "react";
import Status from "./Posts/Status";
import Posts from "./Posts/Posts";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import ArticleCard from "../ArticleCard";
import Stories from "../Stories";

export default function Feed() {
  const supabase = useSupabaseClient();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  function fetchPosts() {
    supabase
      .from("posts")
      .select("id, content, created_at")
      // .is("parent", null)
      .order("created_at", { ascending: false })
      .then((result) => {
        console.log("posts", result);
        setPosts(result.data);
      });
  }

  return (
    <div className="flex w-full md:max-w-xl lg:max-w-2xl flex-col items-center space-y-4 overflow-y-auto scrollbar-hide">
      <Status />
      {posts?.length > 0 &&
        posts.map((post) => (
          <Posts key={post.id} post={post} profile={profile} />
        ))}
    </div>
  );
}
