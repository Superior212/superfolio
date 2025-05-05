"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const WorkHistory = () => {
  return (
    <div className="space-y-8">
      {timeline.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative rounded-xl bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm p-6 hover:shadow-md transition-all duration-300"
          key={`timeline-${index}`}
        >
          <div className="absolute -inset-px bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-indigo-500/0 dark:from-sky-500/5 dark:via-sky-500/20 dark:to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex-1">
                <Heading
                  as="h3"
                  className="text-lg font-bold text-sky-600 dark:text-sky-400 transition-colors group-hover:text-sky-500 dark:group-hover:text-sky-300"
                >
                  {item.company}
                </Heading>
                <Paragraph className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
                  {item.title}
                </Paragraph>
              </div>
              <Paragraph className="text-sm font-medium text-sky-500/80 dark:text-sky-400/80 md:text-right">
                {item.date}
              </Paragraph>
            </div>
            
            <div className="space-y-2">
              {item.responsibilities.map((responsibility, index) => (
                <Step key={responsibility}>{responsibility}</Step>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start space-x-3 group/item">
      <IconCircleCheckFilled className="h-5 w-5 flex-shrink-0 translate-y-0.5 text-sky-500/40 dark:text-sky-400/40 group-hover/item:text-sky-500 dark:group-hover/item:text-sky-400 transition-colors duration-300" />
      <Paragraph className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 group-hover/item:text-neutral-700 dark:group-hover/item:text-neutral-300 transition-colors duration-300">
        {children}
      </Paragraph>
    </div>
  );
};
