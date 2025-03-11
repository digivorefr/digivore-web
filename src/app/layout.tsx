import type { Metadata } from "next";
import { DM_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({ variable: "--font-dm-mono", weight: "300", subsets: ["latin"] });

const nunitoSans = Nunito_Sans({ variable: "--font-nunito-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Senior Frontend Developer",
  description: "Senior Frontend Developer in Toulouse, France. React, TypeScript, Next.js, Tailwind CSS, Git, GitHub, Docker, CI/CD, Agile, Scrum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${dmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
