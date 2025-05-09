import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/auth";
import HomeHero from "@/components/HomeHero";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full py-28">
      <HomeHero />
    </div>
  );
}
