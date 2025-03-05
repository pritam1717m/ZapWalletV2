import { NextResponse } from "next/server"
import { prisma } from "@repo/db/client";

export const GET = async () => {
    await prisma.user.create({
        data : {
            name: "prit",
            number: String(Math.random()),
            password: "3p@r4mx5"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}