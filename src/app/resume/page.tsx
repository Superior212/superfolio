import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";

export default function Home() {
  return (
    <Container>
      <div className="space-y-6">
        <span className="inline-block text-4xl transition-transform hover:scale-110">
          💼
        </span>
        <div className="max-w-2xl">
          <Heading className="font-black bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Professional Experience
          </Heading>
          <Paragraph className="mt-4 text-lg">
            I&apos;m a versatile <Highlight>full-stack developer</Highlight>{" "}
            specializing in blockchain technology and modern web development.
            With expertise in <Highlight>React</Highlight>,{" "}
            <Highlight>Solidity</Highlight>, and <Highlight>Next.js</Highlight>,
            I build scalable solutions that make a difference.
          </Paragraph>
        </div>
        <div className="mt-12">
          <WorkHistory />
        </div>
      </div>
    </Container>
  );
}
