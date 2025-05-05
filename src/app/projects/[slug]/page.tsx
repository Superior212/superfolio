"use client";

import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (product) {
    return {
      title: `${product.title} | Samson Aderonmu`,
      description: product.description,
    };
  } else {
    return {
      title: "Projects | Samson Aderonmu",
      description:
        "Explore Samson Aderonmu's portfolio of innovative projects spanning web development, blockchain applications, and creative digital experiences.",
    };
  }
}

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }

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
          <span className="text-4xl">💼</span>
          <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent"></div>
        </div>

        <SingleProduct product={product} />
      </motion.div>
    </Container>
  );
}
