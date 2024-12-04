import { signIn } from "@/server/auth";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("discord");
            }}
        >
            <Button
                type="submit"
                className="w-full bg-[#5865f2] text-white hover:bg-[#4752c4]"
            >
                <DiscordLogoIcon className="mr-2 h-5 w-5" />
                Login with Discord
            </Button>
        </form>
    );
}
