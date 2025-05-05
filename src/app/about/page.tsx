import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Samson Aderonmu",
  description:
    "Samson Aderonmu is a developer, writer, and design enthusiast. Learn more about his journey, skills, and passion for creating outstanding digital experiences.",
};

export default function AboutPage() {
  return (
    <Container className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-sky-500/5 to-indigo-500/5 dark:from-sky-500/10 dark:to-indigo-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed top-60 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-500/5 to-emerald-500/5 dark:from-indigo-500/10 dark:to-emerald-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="flex items-center space-x-3 mb-2">
        <span className="text-4xl">💬</span>
        <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent"></div>
      </div>

      <Heading className="font-black text-4xl md:text-5xl lg:text-6xl !leading-tight mb-12">
        About <span className="text-sky-600 dark:text-sky-400">Me</span>
      </Heading>

      <About />
    </Container>
  );
}
