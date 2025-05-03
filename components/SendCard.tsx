"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { p2pTransfer } from "../lib/actions/transfer";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div className="flex justify-center items-center h-[20vh]">
            <Card title="Send">
                <div className="min-w-72 pt-2">
                    <Input placeholder={"Number"}  onChange={(value) => {
                        setNumber(value.target.value)
                    }} />
                    <Input placeholder={"Amount"} onChange={(value) => {
                        setAmount(value.target.value)
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async () => {
                             await p2pTransfer(number, Number(amount) * 100)
                        }}>Send</Button>
                    </div>
                </div>
            </Card>
    </div>
}