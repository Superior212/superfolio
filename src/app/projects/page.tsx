import { Container } from "@/components/Container";
import { ProjectsContent } from "@/components/ProjectsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Samson Aderonmu",
  description:
    "Explore Samson Aderonmu's portfolio of innovative projects spanning web development, blockchain applications, and creative digital experiences.",
};

export default function Projects() {
  return (
    <Container className="relative overflow-x-hidden">
      <ProjectsContent />
    </Container>
  );
}
