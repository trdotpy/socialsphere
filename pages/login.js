import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";

export default function Login() {
  const supabase = useSupabaseClient();

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <section className="">
      <div className="h-screen lg:grid lg:grid-cols-12">
        <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.pexels.com/photos/1290515/pexels-photo-1290515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              SocialSphere
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Our platform is designed to foster genuine connection and
              community. We believe that social media should bring people
              together, not exploit their personal information or flood them
              with irrelevant content. That's why we are committed to creating a
              safer, more authentic online experience for all of our users.
            </p>
          </div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block text-center ">
              <Link
                className="inline-flex h-16 w-16 items-center justify-center rounded-full text-blue-600 sm:h-20 sm:w-20"
                href="/"
              ></Link>

              <h1 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                Welcome 😎
              </h1>

              <p className="mt-4 leading-relaxed">
                Connect with friends and family, share your moments and join
                communities of like-minded individuals on our social media
                platform.
              </p>
            </div>

            <div className="col-span-6 flex-col items-center space-y-4 py-4 text-center sm:flex">
              <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                Create an account
              </button>

              <button
                className="inline-block shrink-0 rounded-md border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                onClick={signInWithGoogle}
              >
                Sign in With Google
              </button>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <a href="#" className="text-gray-700 underline">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
