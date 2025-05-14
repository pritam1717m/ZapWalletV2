"use client";

import React from "react";
import * as motion from "motion/react-client";
import { useTheme } from "next-themes";

const zapwalletFeatures = [
  {
    id: 1,
    title: "Instant Transfers",
    description: "Move money in real-time, anytime, anywhere.",
    icon: "⚡",
    color: "#4CAF50",
  },
  {
    id: 2,
    title: "Bank-Grade Security",
    description: "Your money and data are encrypted end-to-end.",
    icon: "🔒",
    color: "#1E88E5",
  },
  {
    id: 3,
    title: "All-in-One Wallet",
    description: "Pay bills, recharge, split expenses, and more.",
    icon: "📱",
    color: "#9C27B0",
  },
  {
    id: 4,
    title: "Cross-Border Payments",
    description: "Send funds globally with low fees and fast delivery.",
    icon: "🌍",
    color: "#FF9800",
  },
  {
    id: 5,
    title: "Smart Expense Tracking",
    description: "Visualize where your money goes.",
    icon: "🧾",
    color: "#00BCD4",
  },
  {
    id: 6,
    title: "Zapwallet Card",
    description: "Use our prepaid card to pay in stores or withdraw cash.",
    icon: "💳",
    color: "#F44336",
  },
];

export default function HomeFeatures() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center gap-15 pb-20"
      style={{
        background: `radial-gradient(ellipse at bottom, #0e7490, ${
          theme == "dark" ? "#000000" : "#ffffff"
        }, ${theme == "dark" ? "#000000" : "#ffffff"})`,
      }}
    >
      <p className="text-4xl font-bold text-emerald-500">Features</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 ">
        {zapwalletFeatures.map((feature) => (
          <Card
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
          />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: string;
  color: string;
}) => {
    const {theme} = useTheme();
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ stiffness: true }}
      className="h-40 w-80 flex flex-col items-center justify-center text-center gap-3 border border-cyan-800 rounded-md p-5 shadow-lg"
      style={{
        boxShadow: `2px 12px 30px ${color}, -12px -20px 30px ${
          theme == "dark" ? "#000000" : "#ffffff"
        }`,
      }}
    >
      <p className="text-xl font-semibold">
        <span>{icon}</span>
        {title}
      </p>
      <p className="font-semibold">{description}</p>
    </motion.div>
  );
};
