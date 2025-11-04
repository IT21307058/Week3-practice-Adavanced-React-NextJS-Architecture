import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Users | Next.js SSR Demo",
  description: "Server-rendered users list powered by DummyJSON.",
  metadataBase: new URL("https://dummyjson.com/users"), // <- set your real domain in prod
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
