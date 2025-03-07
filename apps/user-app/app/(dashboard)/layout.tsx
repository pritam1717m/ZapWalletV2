import { JSX } from "react";
import { Home } from '@geist-ui/icons'
import { Activity } from '@geist-ui/icons'
import { RefreshCw } from '@geist-ui/icons'
import { SidebarItem } from "../../components/SidebarItem";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex">
        <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
            <div>
                <SidebarItem href={"/dashboard"} icon={<Home />} title="Home" />
                <SidebarItem href={"/transfer"} icon={<Activity />} title="Transfer" />
                <SidebarItem href={"/transactions"} icon={<RefreshCw />} title="Transactions" />
            </div>
        </div>
            {children}
    </div>
  );
}