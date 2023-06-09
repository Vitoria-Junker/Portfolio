import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";

export default function LoginPage() {
  return (
    <>
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center  flex-col w-80 md:w-full max-w-md px-4 py-8  sm:px-6 md:px-8 lg:px-10">
           
          <div className="flex flex-wrap gap-4 justify-center ">
            <button
              onClick={() => signIn("github")}
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <FaGithub className="inline-block mr-2" />
              Sign in with GitHub
            </button>
            <button
              onClick={() => signIn("google")}
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-pink2/60 hover:bg-pink2/40 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <FaGoogle className="inline-block mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
