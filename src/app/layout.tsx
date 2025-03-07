import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";


const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

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
        className={`${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
