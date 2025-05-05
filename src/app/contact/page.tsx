"use client";

import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Contact | Samson Aderonmu",
  description:
    "Get in touch with Samson Aderonmu for collaboration opportunities, project inquiries, or just to say hello. I'll respond as quickly as possible.",
};

export default function ContactPage() {
  return (
    <Container className="relative overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-sky-500/5 to-indigo-500/5 dark:from-sky-500/10 dark:to-indigo-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-60 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-emerald-500/5 dark:from-indigo-500/10 dark:to-emerald-500/10 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-4xl">✉️</span>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent"></div>
        </div>

        <Heading className="font-black text-4xl md:text-5xl lg:text-6xl !leading-tight mb-6">
          Let&apos;s{" "}
          <span className="text-sky-600 dark:text-sky-400">Connect</span>
        </Heading>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm p-6 mb-10">
            <Paragraph className="text-neutral-700 dark:text-neutral-300 text-lg">
              Reach out to me over email or fill up this contact form. I will
              get back to you as soon as possible — I promise.
            </Paragraph>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <Contact />
      </motion.div>
    </Container>
  );
}
