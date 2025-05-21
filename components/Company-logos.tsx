"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function CompanyLogos() {
  const { theme } = useTheme();

  const companies = [
    "GitHub",
    "LeetCode",
    "Codeforces",
    "HackerRank",
    "CodeChef",
    "AtCoder",
    "GeeksforGeeks",
    "Kaggle",
    "Stack Overflow",
    "Google Cloud",
    "AWS",
    "Microsoft Azure",
    "Notion",
    "Figma",
    "Replit",
    "Vercel",
    "Supabase",
    "Clerk",
    "OpenAI",
    "Firebase",
  ];

  const gradientLeft =
    theme === "dark"
      ? "from-black"
      : "from-white";
  const gradientRight =
    theme === "dark"
      ? "from-black"
      : "from-white";
  const textColor =
    theme === "dark"
      ? "text-white/50"
      : "text-black/60";

  return (
    <div className="relative overflow-hidden">
      <div
        className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r ${gradientLeft} to-transparent`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l ${gradientRight} to-transparent`}
      />

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex w-fit"
      >
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className={`mx-8 flex w-40 items-center justify-center whitespace-nowrap text-lg font-medium ${textColor}`}
          >
            {company}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
