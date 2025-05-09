"use client";
import { JSX, useLayoutEffect } from "react";
import { SidebarItem } from "@/components/SidebarItem";
import { HomeIcon } from "@/components/ui/home";
import { ActivityIcon } from "@/components/ui/activity";
import { TrendingUpDownIcon } from "@/components/ui/trending-up-down";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { data } = useSession();
  useLayoutEffect(() => {
    if (!data) {
      redirect("/");
    }
  }, []);

  if (!data) {
    return <></>;
  }

  return (
    <div className="flex">
      <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
        <div>
          <SidebarItem href={"/dashboard"} icon={<HomeIcon />} title="Home" />
          <SidebarItem
            href={"/transfer"}
            icon={<ActivityIcon />}
            title="Transfer"
          />
          <SidebarItem
            href={"/transactions"}
            icon={<TrendingUpDownIcon />}
            title="Transactions"
          />
        </div>
      </div>
      {children}
    </div>
  );
}
