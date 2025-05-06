import { JSX } from "react";
import { SidebarItem } from "@/components/SidebarItem";
import { HomeIcon } from "@/components/ui/home";
import { ActivityIcon } from "@/components/ui/activity";
import { TrendingUpDownIcon } from "@/components/ui/trending-up-down";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex">
        <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
            <div>
                <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
                <SidebarItem href={"/transfer"} icon={<ActivityIcon />} title="Transfer" />
                <SidebarItem href={"/transactions"} icon={<TrendingUpDownIcon />} title="Transactions" />
            </div>
        </div>
            {children}
    </div>
  );
}