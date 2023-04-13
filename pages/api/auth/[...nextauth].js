import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import GoogelProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogelProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }), 
    FacebookProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  pages:{signIn:'/signin'}, 
  session:{
    strategy:'jwt'
  }, 
  secret:process.env.JWT_SECRET
}
export default NextAuth(authOptions)