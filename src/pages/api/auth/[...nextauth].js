import NextAuth from "next-auth"
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GithubProvider({
            clientId:process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret:process.env.NEXT_PUBLIC_GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET
        }),
    ], 
    secret: process.env.NEXT_PUBLIC_SECRET  
}) 
