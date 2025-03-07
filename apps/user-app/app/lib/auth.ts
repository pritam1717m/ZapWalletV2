import { prisma } from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextAuthOptions, Session, TokenSet } from "next-auth";
import { loginWithCredentialSchema } from "@repo/types"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "1231231231" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const {data, success} = loginWithCredentialSchema.safeParse(credentials)
                if (!success) {
                    throw new Error("Phone number and password are required");
                } else {
                    const existingUser = await prisma.user.findFirst({
                        where: { number: data.phone },
                    });
    
                    if (existingUser) {
                        const passwordValidation = await bcrypt.compare(data.password, existingUser.password);
                        if (passwordValidation) {
                            return {
                                id: existingUser.id.toString(),
                                name: existingUser.name,
                                email: existingUser.number,
                            };
                        }
                        return null;
                    }
    
                    try {
                        const newUser = await prisma.user.create({
                            data: {
                                number: data.phone,
                                password: await bcrypt.hash(data.password, 10),
                            },
                        });
    
                        return {
                            id: newUser.id.toString(),
                            name: newUser.name,
                            email: newUser.number,
                        };
                    } catch (error) {
                        console.error("Error creating user:", error);
                        return null;
                    }
                }
            },
        }),
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async session({ session, token }: { session: Session; token: TokenSet }): Promise<Session> {
            if (session.user) {
                session.user.email = token.sub as string;
            }
            return session;
        },
    },
};
