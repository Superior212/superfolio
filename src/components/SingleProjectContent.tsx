"use client";

import { SingleProduct } from "@/components/Product";
import { Product } from "@/types/products";
import { motion } from "framer-motion";

export function SingleProjectContent({ product }: { product: Product }) {
  return (
    <>
      {/* Background decorative elements */}
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-sky-500/5 to-indigo-500/5 dark:from-sky-500/10 dark:to-indigo-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-60 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-emerald-500/5 dark:from-indigo-500/10 dark:to-emerald-500/10 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-4xl">💼</span>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent"></div>
        </div>

        <SingleProduct product={product} />
      </motion.div>
    </>
  );
}
