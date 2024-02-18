/* inside here well set our providers such as google authentication */
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
//to handle our authentication well have an handler
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: '',
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {

    }
})

export { handler as GET, handler as POST };