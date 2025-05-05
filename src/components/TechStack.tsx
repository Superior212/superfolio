"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Define categories for tech stack
const categories = [
  {
    name: "Frontend Development",
    icon: "🎨",
    items: [
      "React",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "Recoil",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    items: ["Node", "Express", "PHP", "Laravel", "GraphQL"],
  },
  {
    name: "Blockchain Development",
    icon: "🔗",
    items: ["Solidity", "Foundry", "Hardhat"],
  },
  {
    name: "Cloud & Deployment",
    icon: "🚀",
    items: ["AWS", "Vercel", "Docker"],
  },
  {
    name: "Design & Prototyping",
    icon: "✏️",
    items: ["Figma"],
  },
];

export const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend Development");

  // Map of tech stack items to their image paths, classes, and descriptions
  const techImages: Record<string, { src: string; className: string; description?: string }> = {
    React: {
      src: "/images/logos/react.png",
      className: "h-8 w-8",
      description: "UI library",
    },
    "Next.js": {
      src: "/images/logos/next.png",
      className: "h-8 w-8",
      description: "React framework",
    },
    AWS: {
      src: "/images/logos/aws.webp",
      className: "h-8 w-8",
      description: "Cloud platform",
    },
    Figma: {
      src: "/images/logos/figma.png",
      className: "h-8 w-8",
      description: "Design tool",
    },
    "Framer Motion": {
      src: "/images/logos/framer.webp",
      className: "h-8 w-8",
      description: "Animation library",
    },
    Node: {
      src: "/images/logos/node.png",
      className: "h-8 w-8",
      description: "JS runtime",
    },
    Solidity: {
      src: "/images/logos/solidity.png",
      className: "h-8 w-8",
      description: "Smart contracts",
    },
    Foundry: {
      src: "/images/logos/foundry.png",
      className: "h-8 w-8",
      description: "Testing & deployment",
    },
    Hardhat: {
      src: "/images/logos/hardhat.png",
      className: "h-8 w-8",
      description: "Ethereum development",
    },
    Laravel: {
      src: "/images/logos/laravel.png",
      className: "h-8 w-8",
      description: "PHP framework",
    },
    Tailwind: {
      src: "/images/logos/tailwind.png",
      className: "h-8 w-8",
      description: "CSS framework",
    },
    Recoil: {
      src: "/images/logos/recoil.svg",
      className: "h-8 w-8",
      description: "State management",
    },
    JavaScript: {
      src: "/images/logos/javascript.png",
      className: "h-8 w-8",
      description: "Programming language",
    },
    TypeScript: {
      src: "/images/logos/typescript.png",
      className: "h-8 w-8",
      description: "Typed JavaScript",
    },
    Vercel: {
      src: "/images/logos/vercel.png",
      className: "h-8 w-8",
      description: "Deployment platform",
    },
    Express: {
      src: "/images/logos/express.png",
      className: "h-8 w-8",
      description: "Web framework",
    },
    PHP: {
      src: "/images/logos/php.png",
      className: "h-8 w-8",
      description: "Server-side language",
    },
    GraphQL: {
      src: "/images/logos/graph.png",
      className: "h-8 w-8",
      description: "Query language",
    },
    Docker: {
      src: "/images/logos/docker.png",
      className: "h-8 w-8",
      description: "Containerization",
    },
  };

  // Get active category items
  const activeItems =
    categories.find((cat) => cat.name === activeCategory)?.items || [];

  return (
    <div>
      <div className="flex items-center space-x-4 mb-8">
        <Heading
          as="h2"
          className="font-bold text-xl md:text-2xl lg:text-2xl !m-0">
          Tech Stack
        </Heading>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"></div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={twMerge(
              "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center space-x-1.5",
              activeCategory === category.name
                ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-sm"
                : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700"
            )}>
            <span className="text-sm">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Tech Items Grid */}
      <motion.div
        className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-lg overflow-hidden p-4"
        style={{
          boxShadow:
            "0 10px 30px -15px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="show"
          key={activeCategory} // This forces re-animation when category changes
        >
          {activeItems.map((item, index) => {
            const techImage = techImages[item] || {
              src: `/images/logos/placeholder.png`,
              className: "h-10 w-10",
            };

            return (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="group">
                <div className="bg-white dark:bg-neutral-800 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center h-full group-hover:border-sky-500/50 dark:group-hover:border-sky-500/50">
                  <div className="relative mb-2 p-1.5 bg-white dark:bg-white rounded-lg h-12 w-12 flex items-center justify-center transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-indigo-500/0 group-hover:from-sky-500/10 group-hover:to-indigo-500/10 rounded-lg transition-colors duration-300"></div>
                    <div className="relative z-10">
                      <Image
                        src={techImage.src}
                        width={100}
                        height={100}
                        alt={item}
                        className={twMerge(
                          "object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110",
                          techImage.className
                        )}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xs font-medium text-neutral-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                      {item}
                    </h3>
                    {techImage.description && (
                      <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 opacity-80">
                        {techImage.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};
