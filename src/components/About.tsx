"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCode,
  IconPencil,
  IconDeviceLaptop,
  IconBulb,
} from "@tabler/icons-react";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1719937050792-a6a15d899281?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1721843431268-b8e380c6892f?q=80&w=2854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721598736808-7e69bf04c3cc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const skills = [
    {
      icon: <IconCode className="h-6 w-6 text-sky-500" />,
      title: "Development",
      description:
        "Building modern web applications with React, Next.js, and other cutting-edge technologies.",
    },
    {
      icon: <IconPencil className="h-6 w-6 text-indigo-500" />,
      title: "Writing",
      description:
        "Creating engaging content that explains complex technical concepts in accessible ways.",
    },
    {
      icon: <IconDeviceLaptop className="h-6 w-6 text-purple-500" />,
      title: "Design",
      description:
        "Crafting beautiful user interfaces with a focus on usability and aesthetics.",
    },
    {
      icon: <IconBulb className="h-6 w-6 text-amber-500" />,
      title: "Innovation",
      description:
        "Exploring new technologies and approaches to solve challenging problems.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="space-y-16 overflow-hidden">
      {/* Hero section with images */}
      <div className="relative">
        <div className="hidden md:block absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 dark:from-sky-500/5 dark:to-indigo-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="hidden md:block absolute top-40 -left-20 w-72 h-72 bg-gradient-to-tr from-indigo-500/10 to-emerald-500/10 dark:from-indigo-500/5 dark:to-emerald-500/5 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-10">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                y: 20,
                rotate: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? 2 : -2,
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                rotate: 0,
                transition: { duration: 0.2 },
              }}
              className="overflow-hidden">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <Image
                  src={image}
                  width={400}
                  height={600}
                  alt="about"
                  className="object-cover w-full h-40 md:h-64 transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Introduction */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <div className="bg-gradient-to-r from-sky-500 to-indigo-600 h-1 w-20 mb-6 rounded-full"></div>
        <Paragraph className="text-lg md:text-xl font-medium text-neutral-800 dark:text-white mb-6">
          Hello, I&apos;m Samson Aderonmu. I&apos;m a developer, writer, and
          design enthusiast. I am delighted to welcome you to my digital space!
        </Paragraph>
      </motion.div>

      {/* Skills section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
            className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-neutral-100 dark:bg-neutral-700 p-3 rounded-lg">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                  {skill.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bio section */}
      <motion.div
        className="max-w-4xl mx-auto bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-md p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}>
        <div className="space-y-6">
          <Paragraph className="text-neutral-700 dark:text-neutral-300">
            From the early stages of my journey, I have been fascinated by
            creating outstanding digital experiences. As a developer, I take
            pleasure in turning lines of code into functional and elegant
            solutions. I aim to produce software and construct digital marvels
            that blend form and function seamlessly.
          </Paragraph>

          <Paragraph className="text-neutral-700 dark:text-neutral-300">
            But my journey doesn&apos;t stop at coding. With a heart full of
            words and a mind brimming with ideas, I&apos;ve ventured into the
            realm of writing. From tech articles that unravel complex concepts
            to creative tales that ignite the imagination, I weave words to
            inform, entertain, and inspire.
          </Paragraph>

          <Paragraph className="text-neutral-700 dark:text-neutral-300">
            What distinguishes me is my unwavering appreciation for design. I
            firmly believe that aesthetics and usability go hand in hand. My
            keen eye for excellent design ensures that every project I undertake
            functions flawlessly under the surface and looks stunning on the
            outside.
          </Paragraph>
        </div>
      </motion.div>

      {/* Connect section */}
      <motion.div
        className="text-center max-w-2xl mx-auto pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}>
        <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-4">
          Let&apos;s Connect
        </h3>
        <Paragraph className="text-neutral-700 dark:text-neutral-300 mb-6">
          Join me on this technology, creativity, storytelling, and design
          journey. Together, we can explore the endless possibilities of
          technology and storytelling.
        </Paragraph>

        <div className="flex justify-center space-x-4">
          <motion.a
            href="https://github.com/Superior212"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <IconBrandGithub className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/samsonaderonmu/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <IconBrandLinkedin className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </motion.a>
          <motion.a
            href="https://twitter.com/samsonaderonmu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <IconBrandTwitter className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
