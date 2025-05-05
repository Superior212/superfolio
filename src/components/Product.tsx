"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );

  return (
    <div className="py-6">
      {/* Main image display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={product.slug}
        className="relative">
        <div className="overflow-hidden rounded-xl shadow-lg bg-gradient-to-r from-sky-500/10 to-indigo-500/10 dark:from-sky-500/5 dark:to-indigo-500/5 p-[1px]">
          <div className="bg-white dark:bg-neutral-800 rounded-[10px] p-2">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={activeImage}
                alt={product.title}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Thumbnail gallery */}
      <motion.div
        className="flex flex-row justify-center my-6 flex-wrap gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        {product.images.map((image, idx) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
            className={`relative overflow-hidden rounded-lg ${
              activeImage === image
                ? "ring-2 ring-sky-500"
                : "ring-1 ring-neutral-200 dark:ring-neutral-700"
            } transition-all duration-200`}>
            <Image
              src={image}
              alt={`${product.title} thumbnail ${idx + 1}`}
              width={120}
              height={80}
              className="h-16 w-24 md:h-20 md:w-32 object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </motion.button>
        ))}
      </motion.div>

      {/* Project title and tech stack */}
      <motion.div
        className="mt-10 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <Heading className="font-black text-3xl md:text-4xl text-neutral-800 dark:text-white">
            {product.title}
          </Heading>

          <div className="flex flex-wrap gap-2">
            {product.stack?.map((stack: string) => (
              <span
                key={stack}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                {stack}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-500/20 to-indigo-500/20 dark:from-sky-500/10 dark:to-indigo-500/10 h-0.5 w-full rounded-full mb-6"></div>

        <Paragraph className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
          {product.description}
        </Paragraph>
      </motion.div>

      {/* Project content */}
      <motion.div
        className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-neutral-700 dark:text-neutral-300 dark:prose-invert prose-headings:text-neutral-800 dark:prose-headings:text-white prose-a:text-sky-600 dark:prose-a:text-sky-400 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        {product?.content}
      </motion.div>

      {/* Live preview button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8">
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
          Live Preview
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </a>
      </motion.div>
    </div>
  );
};
