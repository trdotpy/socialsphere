import { useEffect, useState } from "react";
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
      .select("id, content, created_at, profiles(id, avatar, name)")
      .order("created_at", { ascending: false })
      .then((result) => {
        // console.log("posts", result);
        setPosts(result.data);
      });
  }

  // Function for fetching profile data
  async function fetchProfile() {
    const user = session?.user;

    if (user) {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, avatar, name")
        .eq("id", user.id);

      if (error) {
        console.log(error);
      } else if (data && data.length === 0) {
        const { data: newProfileData, error: newProfileError } = await supabase
          .from("profiles")
          .insert({
            id: user.id,
            name: user.email,
            avatar: user.user_metadata.avatar_url,
          });

        if (newProfileData && newProfileData.length > 0) {
          setProfile(newProfileData[0]);
        }
      } else if (data && data.length > 0) {
        setProfile(data[0]);
      }
    }
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

  useEffect(() => {
    if (session) {
      fetchProfile();
    }
  }, [session]);

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
