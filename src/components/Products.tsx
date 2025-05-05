"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8">
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
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="group relative">
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="block">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 dark:from-sky-500/5 dark:to-indigo-500/5 p-[1px] shadow-md group-hover:shadow-lg transition-all duration-300">
                <div className="bg-white dark:bg-neutral-800/90 rounded-[10px] p-5 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative md:w-1/3 flex-shrink-0">
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-neutral-100 dark:bg-neutral-700/50">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                    </div>

                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <Heading
                          as="h3"
                          className="font-bold text-xl md:text-xl lg:text-xl group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                          {product.title}
                        </Heading>
                        <Paragraph className="text-sm md:text-base mt-2 max-w-xl text-neutral-600 dark:text-neutral-400">
                          {product.description}
                        </Paragraph>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {product.stack?.map((stack: string) => (
                          <span
                            key={stack}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors duration-300">
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-1 left-[10%] right-[10%] h-px bg-gradient-to-r from-sky-500/0 via-sky-500/70 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
