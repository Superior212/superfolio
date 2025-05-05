import React from "react";
import { twMerge } from "tailwind-merge";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main
      className={twMerge(
        `max-w-5xl w-full mx-auto py-12 px-4 md:px-8 lg:px-10 relative overflow-hidden`,
        className
      )}>
      {children}
    </main>
  );
};
