import { signOut } from "@/server/auth";
import { Button } from "./ui/button";

export default function SignOut() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
            }}
        >
            <Button
                type="submit"
            >
                Logout
            </Button>
        </form>
    );
}
