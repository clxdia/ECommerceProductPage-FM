import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frontend Mentor | E-commerce product page",
  description: "Challenge by Frontend Mentor. Coded by clxdia",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-kumbh bg-white">
        <Header />
        {children}
        <footer className="md:mt-0 mt-10 text-center text-sm p-3">
          <p>
            Challenge by{" "}
            <Link
              className="text-orange underline"
              href="https://www.frontendmentor.io/home"
              target="_blank"
            >
              Frontend Mentor.{""}
            </Link>{" "}
            Coded by{" "}
            <Link
              className="text-orange underline"
              href="https://github.com/clxdia"
              target="_blank"
            >
              clxdia.
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
