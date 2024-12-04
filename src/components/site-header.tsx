import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { auth } from "@/server/auth"
import { buttonVariants } from "./ui/button"
import Link from "next/link"
import SignOut from "./sign-out"

export async function SiteHeader() {
    const session = await auth()

    return (
        <header className="sticky top-0 z-40 w-full bg-background">
            <div className="m-auto container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNav items={siteConfig.mainNav} />
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <ThemeToggle />
                        {session ? (
                            <SignOut />
                        ) : (
                            <Link href="/login" className={buttonVariants({ variant: "default"})}>Login</Link>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}
