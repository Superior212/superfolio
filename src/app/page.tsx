"use client";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container>
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 dark:from-sky-500/5 dark:to-indigo-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-gradient-to-tr from-indigo-500/10 to-emerald-500/10 dark:from-indigo-500/5 dark:to-emerald-500/5 rounded-full blur-3xl -z-10"></div>

        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative">
          <div className="flex items-center space-x-2 mb-2">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="text-4xl">
              👋
            </motion.span>
            <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent"></div>
          </div>

          <Heading className="font-black text-4xl md:text-5xl lg:text-6xl !leading-tight">
            Hello there! I&apos;m{" "}
            <span className="relative inline-block text-sky-600 dark:text-sky-400">
              Samson
              <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full z-10"></div>
            </span>
          </Heading>

          <div className="mt-6 space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Paragraph className="text-base md:text-lg">
                I&apos;m a full-stack developer that loves{" "}
                <Highlight className="font-medium px-2 py-1 bg-sky-500/10 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 rounded-md">
                  building products
                </Highlight>{" "}
                and web apps that can impact millions of lives.
              </Paragraph>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <Paragraph className="text-base md:text-lg">
                <Highlight className="font-medium px-2 py-1 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-md">
                  Fueled by a passion
                </Highlight>{" "}
                for contributing to the world of the internet. I was always
                interested in tech as a child that passion is now defining my
                career.
              </Paragraph>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24">
          <div className="flex items-center space-x-4 mb-6">
            <Heading
              as="h2"
              className="font-bold text-xl md:text-2xl lg:text-2xl !m-0">
              What I&apos;ve been working on
            </Heading>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"></div>
          </div>

          <Products />
        </motion.div>

        {/* Tech stack section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16">
          <TechStack />
        </motion.div>
      </div>
    </Container>
  );
}
