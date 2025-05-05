"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Badge = ({
  text,
  href,
  ...props
}: {
  text: string;
  href: string;
  props?: React.ComponentProps<typeof Link>;
}) => {
  return (
    <Link
      href={href}
      className="no-underline group cursor-pointer relative text-xs font-medium leading-6 inline-block w-full"
      {...props}>
      <div className="relative overflow-hidden rounded-lg transition-all duration-300 group-hover:shadow-md">
        <div className="relative flex items-center justify-between space-x-2 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 dark:from-sky-500/20 dark:to-indigo-500/20 rounded-lg py-2 px-3 transition-all duration-300 group-hover:from-sky-500/20 group-hover:to-indigo-500/20 dark:group-hover:from-sky-500/30 dark:group-hover:to-indigo-500/30">
          <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300 font-medium">
            {text}
          </span>
          <div className="flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-transform duration-300 group-hover:translate-x-0.5">
                <motion.path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}></motion.path>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </Link>
  );
};
