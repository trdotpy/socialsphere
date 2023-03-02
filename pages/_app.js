import "../styles/globals.css";
import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <div className="text-gray-800">
        <Component {...pageProps} />
      </div>
    </SessionContextProvider>
  );
}

export default MyApp;
