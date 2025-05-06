import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { authOptions } from "../lib/auth";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard')
  } 

  return (
    <div className="w-full flex flex-col items-center py-28 gap-5">
      <TextShimmer className="text-5xl font-extrabold font-[PatuaOne] tracking-wider" duration={25} >Payments That Never Miss a Beat</TextShimmer>
      <p className="text-2xl font-semibold text-fuchsia-200">Experience secure, seamless transactions with a platform built for long-term performance.</p>
    </div>
  )
}