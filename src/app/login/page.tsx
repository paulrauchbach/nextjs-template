import SignIn from "@/components/sign-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DiscordLogin() {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
            <Card className="w-full max-w-md border-none bg-[#2f3136] text-white shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">
                        Welcome!
                    </CardTitle>
                    <p className="text-center text-[#b9bbbe]">
                        Log in with Discord to continue
                    </p>
                </CardHeader>
                <CardContent>
                    <SignIn />
                </CardContent>
            </Card>
        </div>
    );
}
