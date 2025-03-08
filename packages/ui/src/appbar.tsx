// import { LogoSize } from "@repo/types";
import { Button } from "./button";
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
    return <div className="flex justify-between border-b px-4 border-black bg-gradient-to-br from-sky-300 to-purple-500">
        <div className="text-lg flex flex-row justify-center items-center">
            <Logo /> {/* size={LogoSize.small} */}
            <p className="text-black font-extrabold text-2xl font-[Sacramento]">ZapWallet</p>
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}