import { PostHogProvider } from "@/components/PostHogProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/portfolio/Navigation";
import ChatWidget from "@/components/portfolio/ChatWidget";
import { ViewTransitions } from "next-view-transitions";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Sonthep Simmalee - Full Stack Developer",
  description: "Portfolio of Sonthep Simmalee, a passionate full-stack developer specializing in modern web technologies, React, Next.js, and innovative digital solutions.",
  keywords: "Sonthep Simmalee, Full Stack Developer, React, Next.js, Web Development, Portfolio",
  authors: [{ name: "Sonthep Simmalee" }],
  openGraph: {
    title: "Sonthep Simmalee - Full Stack Developer",
    description: "Portfolio of Sonthep Simmalee, a passionate full-stack developer specializing in modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
          <PostHogProvider>
            <ThemeProvider>
              <Navigation />
              {children}
              <ChatWidget />
            </ThemeProvider>
          </PostHogProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}