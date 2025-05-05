import { Container } from "@/components/Container";
import { SingleProjectContent } from "@/components/SingleProjectContent";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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

export default async function SingleProjectPage({
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
      <SingleProjectContent product={product} />
    </Container>
  );
}
