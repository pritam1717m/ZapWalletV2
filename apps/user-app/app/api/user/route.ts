import {prisma} from "@repo/db"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"
import { authOptions } from "../../lib/auth";

export const GET = async () => {
    const session = await getServerSession(authOptions);
    if (session.user) {
        return NextResponse.json({
            user: session.user
        })
    }
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })
}
export const POST = async () => {
    // sign in logic
    return NextResponse.json({
        message: "Logged in"
    }, {
        status: 403
    })
}