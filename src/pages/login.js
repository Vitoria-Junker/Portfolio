import { FaGithub, FaGoogle } from 'react-icons/fa';
import { signIn} from 'next-auth/react'
import { getSession } from 'next-auth/react';


export default function LoginPage () {
    return(
        <>
        <div className="flex justify-center items-center">
        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800/50 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Login To Your Account
        </div>
        <div className="flex gap-4 item-center">
          <button onClick={() => signIn('github')} type="button" className="py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          <FaGithub className="inline-block mr-2" />
          Sign in with GitHub
          </button>
          <button onClick={() => signIn('google')} type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-800 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          <FaGoogle className="inline-block mr-2" />
          Sign in with Google
          </button>
        </div>
        
      </div>
        </div>
            
        </>
    )
}

export async function getServerSideProps (context) {
    const session = await getSession(context)
    console.log(session)

    if(session) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
    return {
        props: {
            session
        }
    }
}