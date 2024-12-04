import { authConfig } from "@/server/auth/config"
import NextAuth from "next-auth"

const { auth: middleware } = NextAuth(authConfig)

export default middleware((req) => {
    if (!req.auth && req.nextUrl.pathname !== "/login") {
        const newUrl = new URL("/login", req.nextUrl.origin)
        return Response.redirect(newUrl)
    } else if (req.nextUrl.pathname === "/login" && req.auth) {
        const newUrl = new URL("/", req.nextUrl.origin)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)", // this appears to be necessary to avoid redirect for static stuff like css etc
    ],
    // docs: https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
}
