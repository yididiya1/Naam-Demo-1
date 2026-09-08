import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Sen is the typeface used on naamass.org.
const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New American Association of Massachusetts (NAAM)",
    template: "%s · NAAM",
  },
  description:
    "NAAM empowers every refugee and immigrant to thrive, with English classes, job training, legal help, wellness, youth programs, and a culturally welcoming food pantry across Massachusetts.",
  metadataBase: new URL("https://www.naamass.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sen.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
