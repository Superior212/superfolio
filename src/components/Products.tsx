"use client";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion, AnimatePresence } from "framer-motion";

export const Products = () => {
  const [selectedProject, setSelectedProject] = useState<Product | null>(null);

  const openProjectDetails = (product: Product) => {
    setSelectedProject(product);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-2 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group relative transform transition-all duration-300 hover:-translate-y-1 h-full">
            <button
              onClick={() => openProjectDetails(product)}
              className="block w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-xl">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 dark:from-sky-500/5 dark:to-indigo-500/5 p-[1px] shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="bg-white dark:bg-neutral-800/90 rounded-[10px] p-4 full flex flex-col transition-all duration-300">
                  <div className="flex flex-col h-full gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="relative overflow-hidden rounded-lg aspect-[16/9] bg-neutral-100 dark:bg-neutral-700/50">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                    </div>

                    <div className="flex flex-col justify-between flex-1 space-y-4">
                      <div>
                        <Heading
                          as="h3"
                          className="font-bold text-xl group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                          {product.title}
                        </Heading>
                        <Paragraph className="text-sm mt-2 line-clamp-2 text-neutral-600 dark:text-neutral-400">
                          {product.description}
                        </Paragraph>
                      </div>

                      <div className="flex items-center overflow-x-auto no-scrollbar scrolling-touch py-1 mt-auto">
                        <div className="flex gap-2 flex-nowrap">
                          {product.stack?.map((stack: string) => (
                            <span
                              key={stack}
                              className="text-xs font-medium shrink-0 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600 transition-colors duration-300">
                              {stack}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-1 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={closeProjectDetails}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl mx-auto bg-white dark:bg-neutral-800 rounded-xl shadow-xl overflow-hidden max-h-[90vh] flex flex-col">
                {/* Close button */}
                <button
                  onClick={closeProjectDetails}
                  className="absolute top-3 right-3 bg-white/80 dark:bg-neutral-700/80 backdrop-blur-sm p-1.5 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-600 transition-colors z-10 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                {/* Header with image */}
                <div className="relative w-full h-48 sm:h-56 flex-shrink-0">
                  <Image
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Heading className="font-bold text-xl sm:text-2xl text-white">
                      {selectedProject.title}
                    </Heading>
                  </div>
                </div>

                {/* Scrollable content */}
                <div className="p-4 overflow-y-auto flex-grow">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.stack?.map((stack: string) => (
                      <span
                        key={stack}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-600">
                        {stack}
                      </span>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-sky-500/20 to-indigo-500/20 dark:from-sky-500/10 dark:to-indigo-500/10 h-0.5 w-full rounded-full mb-3"></div>

                  {/* Description */}
                  <Paragraph className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-4">
                    {selectedProject.description}
                  </Paragraph>

                  {/* Project content */}
                  <div className="prose prose-sm max-w-none text-neutral-700 dark:text-neutral-300 dark:prose-invert prose-headings:text-neutral-800 dark:prose-headings:text-white prose-a:text-sky-600 dark:prose-a:text-sky-400 mb-6">
                    {selectedProject?.content}
                  </div>
                </div>

                {/* Footer with button */}
                <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/80">
                  <a
                    href={selectedProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
