"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            exit={{ x: -200 }}
            className="px-6 z-[100] py-8 bg-white dark:bg-neutral-900 sm:max-w-[16rem] lg:w-[280px] fixed lg:relative h-screen left-0 flex flex-col justify-between transition-all duration-200 border-r border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>
            <div className="flex flex-col space-y-4 mt-4">
              <div className="pt-4 px-2">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 dark:from-sky-500/5 dark:to-indigo-500/5 p-[1px] shadow-lg">
                  <div className="bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-[10px] p-4">
                    <div className="flex flex-col space-y-4">
                      <div
                        onClick={() => isMobile() && setOpen(false)}
                        className="w-full">
                        <Badge href="/resume" text="View Resume" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                          Switch Theme
                        </div>
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="fixed lg:hidden bottom-6 right-6 h-12 w-12 bg-white dark:bg-neutral-800 rounded-full shadow-lg backdrop-blur-md flex items-center justify-center z-50 transition-all duration-300 hover:scale-105 border border-neutral-100 dark:border-neutral-700"
        onClick={() => setOpen(!open)}>
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        <IconLayoutSidebarRightCollapse className="h-5 w-5 text-sky-500 dark:text-sky-400 relative" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-2 relative z-[100] overflow-y-auto scrollbar-hide">
      <div className="mb-2 px-2">
        <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium mb-2">
          Menu
        </div>
        <div className="space-y-1">
          {navlinks.map((link: Navlink) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => isMobile() && setOpen(false)}
              className={twMerge(
                "text-secondary hover:text-primary transition-all duration-200 flex items-center space-x-3 py-2.5 px-3 rounded-lg text-sm group relative overflow-hidden",
                isActive(link.href)
                  ? "bg-gradient-to-r from-sky-50 to-indigo-50 dark:from-sky-950/40 dark:to-indigo-950/40 text-primary font-medium"
                  : "hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
              )}>
              <span
                className={twMerge(
                  "absolute inset-0 bg-gradient-to-r from-sky-100/0 via-sky-100/40 to-indigo-100/0 dark:from-sky-900/0 dark:via-sky-900/20 dark:to-indigo-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  isActive(link.href) && "opacity-100"
                )}></span>
              <span
                className={twMerge(
                  "relative flex items-center justify-center w-7 h-7 rounded-md",
                  isActive(link.href) && "text-sky-500"
                )}>
                <link.icon
                  className={twMerge(
                    "h-4.5 w-4.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110",
                    isActive(link.href) && "text-sky-500"
                  )}
                />
              </span>
              <span className="relative">{link.label}</span>
              {isActive(link.href) && (
                <span className="absolute right-2 w-1.5 h-1.5 rounded-full bg-sky-500"></span>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 px-2">
        <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium mb-2">
          Socials
        </div>
        <div className="space-y-1">
          {socials.map((link: Navlink) => (
            <Link
              key={link.href}
              href={link.href}
              className={twMerge(
                "text-secondary hover:text-primary transition-all duration-200 flex items-center space-x-3 py-2.5 px-3 rounded-lg text-sm group relative overflow-hidden",
                "hover:bg-neutral-100 dark:hover:bg-neutral-800/50"
              )}>
              <span className="absolute inset-0 bg-gradient-to-r from-sky-100/0 via-sky-100/40 to-indigo-100/0 dark:from-sky-900/0 dark:via-sky-900/20 dark:to-indigo-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center justify-center w-7 h-7 rounded-md">
                <link.icon className="h-4.5 w-4.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
              </span>
              <span className="relative">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mb-8">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-300"></div>
        <Image
          src="/sam.png"
          alt="Avatar"
          height="60"
          width="60"
          className="relative object-cover object-top rounded-full flex-shrink-0 border-2 border-white dark:border-neutral-800"
        />
      </div>
      <div className="flex text-sm flex-col items-center">
        <p className="font-bold text-primary text-base">Samson Aderonmu</p>
        <p className="font-light text-secondary text-xs">Software Developer</p>
      </div>
    </div>
  );
};
