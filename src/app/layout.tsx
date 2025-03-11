import type { Metadata } from "next";
import { Be_Vietnam_Pro, DM_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({ variable: "--font-dm-mono", weight: ["400"], subsets: ["latin"] });

const beVietnamPro = Be_Vietnam_Pro({ variable: "--font-be-vietnam-pro", weight: "100", subsets: ["latin"] });

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
        className={`${nunitoSans.variable} ${dmMono.variable} ${beVietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
