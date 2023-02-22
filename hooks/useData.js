import { useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function useData() {
  const supabase = useSupabaseClient();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);
  const session = useSession();
  const [content, setContent] = useState("");

  function fetchPosts() {
    supabase
      .from("posts")
      .select("id, content, created_at")
      .order("created_at", { ascending: false })
      .then((result) => {
        console.log("posts", result);
        setPosts(result.data);
      });
  }

  function fetchProfile() {
    supabase
      .from("profiles")
      .select("id, avatar, name")
      .then((result) => {
        console.log("profiles", result);
        if (result.data.length > 0) {
          setProfile(result.data[0]);
        }
      });
  }

  function sendPost(e) {
    e.preventDefault();

    supabase
      .from("posts")
      .insert({
        author: session.user.id,
        content,
      })
      .then((response) => {
        console.log(response);
        setContent("");
      });
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
  }
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return {
    posts,
    profile,
    setProfile,
    fetchPosts,
    fetchProfile,
    handleSignOut,
    signInWithGoogle,
    sendPost,
    content,
    setContent,
  };
}
