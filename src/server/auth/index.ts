import { cache } from "react"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"

import client from "@/lib/db"

import { authConfig } from "./config"

const {
    auth: uncachedAuth,
    handlers,
    signIn,
    signOut,
} = NextAuth({
    adapter: MongoDBAdapter(client, {
        // problem with using an adapter here is, that the middleware runs by default on the edge runtime which doesnt have access to some packages (https://authjs.dev/guides/edge-compatibility)
        databaseName: "db",
    }),
    session: { strategy: "jwt" },
    ...authConfig,
})

const auth = cache(uncachedAuth)

export { auth, handlers, signIn, signOut }
