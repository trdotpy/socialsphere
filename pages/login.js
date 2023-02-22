import Link from "next/link";
import useData from "../hooks/useData";

export default function Login() {
  const { signInWithGoogle } = useData();

  return (
    <section className="bg-gray-50">
      <div className="h-screen lg:grid lg:grid-cols-12">
        <section className="relative flex h-1/3 items-end lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="building-blocks"
            src="https://images.unsplash.com/photo-1648464146474-c78d49c54b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
            </a>

            <p className="mt-4 leading-relaxed text-white/90">
              Our platform is designed to foster genuine connection and
              community. We believe that social media should bring people
              together, not exploit their personal information or flood them
              with irrelevant content. That&apos;s why we are committed to
              creating a stronger, more authentic online experience for all of
              our users.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center bg-gray-100 px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block text-center ">
              <Link
                className="inline-flex h-16 w-16 items-center justify-center rounded-full text-blue-600 sm:h-20 sm:w-20"
                href="/"
              ></Link>

              <div className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
                <div className="inline-flex items-center">
                  <span>S</span>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-9 w-9 text-pink-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                  <span>CIALPHERE</span>
                </div>
              </div>

              <p className="mt-4 leading-relaxed">
                Connect with friends and family, share your moments and join
                communities of like-minded personalities on our social media
                platform.
              </p>
            </div>

            <div className="col-span-6 flex-col items-center space-y-4 py-4 text-center sm:flex">
              <button
                className="inline-block shrink-0 rounded-md border border-green-500 bg-green-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
                onClick={signInWithGoogle}
              >
                Sign in With Google
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
