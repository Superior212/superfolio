import React from "react";

import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

export const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={twMerge(
        "text-sm lg:text-base font-normal text-neutral-600 dark:text-neutral-300",
        className
      )}>
      {children}
    </p>
  );
};
