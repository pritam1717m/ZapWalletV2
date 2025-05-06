
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggler";
import Logo from "./logo";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="m-5 top-2 h-14 md:h-16 flex items-center px-5 lg:px-10 justify-between rounded-2xl border-b transition-all duration-300 border border-input backdrop-blur-3xl">
        <div className="flex justify-center items-center gap-2">
            <Logo />
        </div>
        <div className="flex justify-center gap-5">
            <ModeToggle />
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}