import type { Metadata } from "next";

import "./globals.css";

const siteUrl = "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Ebisi Chinecherem Leonard (Leo Wave) | Full Stack Software Engineer",
    template: "%s | Leo Wave",
  },

  description:
    "Ebisi Chinecherem Leonard, professionally known as Leo Wave, is a Nigerian Full Stack Software Engineer and Computer Science graduate. He builds modern web applications, scalable backend systems, APIs, and digital products using JavaScript, TypeScript, React, Next.js, Node.js, Hono, Express.js, and PostgreSQL. Passionate about software engineering, artificial intelligence, entrepreneurship, system design, and emerging technologies, he enjoys solving real-world problems through technology and building innovative products that make an impact.",

  keywords: [
    // Personal identity
    "Leo Wave",
    "Leowave",
    "LeoWave",
    "LEOWAVE",
    "Leonard Ebisi",
    "Ebisi Chuks",
    "Ebisi Chinecherem Leonard",
    "Chinecherem Ebisi",
    "Leonard Chinecherem",
    "Ebisi Leonard",

    // Professional identity
    "Leo Wave Developer",
    "Leonard Ebisi Developer",
    "Leo Wave Software Engineer",
    "Nigerian Full Stack Developer",
    "Nigerian Software Engineer",
    "Full Stack Developer",
    "Full Stack Software Engineer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Backend Developer",
    "Frontend Developer",
    "Web Developer",

    // Technologies
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Hono",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Bun",
    "REST API Development",
    "Backend Development",
    "Frontend Development",
    "Full Stack Development",
    "System Design",

    // Interests and expertise
    "Artificial Intelligence",
    "AI Agent Development",
    "Software Engineering",
    "Web Applications",
    "Mobile App Development",
    "Technology Entrepreneurship",
    "Digital Product Development",
    "Computer Science",
    "Emerging Technologies",

    // Website content
    "Leo Wave Portfolio",
    "Developer Portfolio",
    "Personal Developer Website",
    "Personal Developer Blog",
    "Programming",
    "Web Development",
    "Software Engineering Blog",
    "Coding Tutorials",
    "Tech Articles",
    "Developer Journey",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title:
      "Ebisi Chinecherem Leonard (Leo Wave) | Full Stack Software Engineer",
    description:
      "Explore the portfolio of Leo Wave, a Nigerian Full Stack Software Engineer building modern web applications, backend systems, APIs, and AI-powered digital products.",
    url: siteUrl,
    siteName: "Leo Wave",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        alt: "Leo Wave - Full Stack Software Engineer Portfolio",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Ebisi Chinecherem Leonard (Leo Wave) | Full Stack Software Engineer",
    description:
      "I'm Leo Wave, a Full Stack Software Engineer passionate about building modern web applications, backend systems, AI agents, and digital products.",
    images: [`${siteUrl}/og-image.png`],
  },

  alternates: {
    canonical: siteUrl,
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
