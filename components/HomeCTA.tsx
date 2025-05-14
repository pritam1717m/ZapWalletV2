"use client";

import React from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import * as motion from "motion/react-client";

export default function HomeCTA() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex gap-5 justify-center"
    >
      <Button variant={"outline"}>Get a Demo</Button>
      <Button onClick={() => redirect("/api/auth/signin")}>Get Started</Button>
    </motion.div>
  );
}
