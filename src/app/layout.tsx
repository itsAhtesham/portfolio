import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ahtesham Siddiqui | Software Developer",
  description:
    "Software Developer building scalable backend systems with Node.js, NestJS, React, and Google Cloud Platform.",
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "Node.js",
    "NestJS",
    "React",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "MongoDB",
    "Google Cloud Platform",
    "Backend Developer",
    "Web Developer",
  ],
  authors: [{ name: "Ahtesham Mohammad Siddiqui" }],
  creator: "Ahtesham Mohammad Siddiqui",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ahtesham Siddiqui | Software Developer",
    description:
      "Software Developer building scalable backend systems with Node.js, NestJS, React, and Google Cloud Platform.",
    siteName: "Ahtesham Siddiqui",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahtesham Siddiqui | Software Developer",
    description:
      "Software Developer building scalable backend systems with Node.js, NestJS, React, and Google Cloud Platform.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans`}
      >
        <ThemeProvider>
          <div className="grain-overlay" aria-hidden="true" />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
