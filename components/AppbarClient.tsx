"use client"
import { signIn, signOut, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

export function AppbarClient() {
  const session = useSession();
  const router = useRouter();

  return (
   <div>
      sdgdg
   </div>
  );
}