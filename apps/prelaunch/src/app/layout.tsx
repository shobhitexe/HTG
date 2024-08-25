import type { Metadata } from "next";
import "./globals.css";
import "@repo/ui/styles.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Hera Trading Capital",
  description:
    "Hera Trading Group, the Epitome of Trading like the Gods, with Capital of Up To $200,000.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
