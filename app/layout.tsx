import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/Components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Sanjay Kannan | Application Developer",
  description:
    "Portfolio of Sanjay Kannan — a results-driven Application Developer with 4+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, and Node.js. Explore projects, skills, and professional achievements.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="gradient-bg bg-[#0d1117] min-h-screen flex flex-col">
        <Navbar />
        <div className="grow bg-black h-full">{children}</div>
        {/* <Footer /> */}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              color: "black",
            },
          }}
        />
      </body>
    </html>
  );
}
