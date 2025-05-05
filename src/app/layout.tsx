import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Samson Aderonmu - Developer",
  description:
    "Samson Aderonmu is a developer, and a speaker. He is a digital nomad and travels around the world while working remotely.",
  icons: {
    icon: "/sam.png",
    apple: "/sam.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-white dark:bg-neutral-900 transition-colors duration-200 scrollbar-hide"
        )}>
        <ThemeProvider defaultTheme="system" storageKey="superfolio-theme">
          <Sidebar />
          <div className="lg:pl-2 pl-4 lg:pt-2 bg-white dark:bg-neutral-900 flex-1 overflow-y-auto scrollbar-hide transition-colors duration-200">
            <div className="flex-1 bg-white dark:bg-neutral-900 min-h-screen overflow-y-auto scrollbar-hide transition-colors duration-200">
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
