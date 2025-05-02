"use server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { prisma } from "@repo/db/client";

export const onRampTransactions = async (amount : number, provider : string) => {
    const session = await getServerSession(authOptions);
    const userId = Number(session?.user?.email);
    const token = Math.random().toString(); // This is a token which bank providers provides while transaction happening

    if(!userId) {
        return {
            message : "User not logged in"
        }
    }

    await prisma.onRampTransaction.create({
        data: {
            userId,
            amount : amount * 100,
            status: "Processing",
            startTime : new Date(),
            provider,
            token : token
        }
    })
    
}