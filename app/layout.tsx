import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick Goulart - Computer Science Student & Developer",
  description: "Portfolio of Nick Goulart, a passionate Computer Science student from Cal State University Fullerton. Explore my projects in AI, machine learning, web development, and more.",
  keywords: ["Nick Goulart", "Computer Science", "Portfolio", "Developer", "AI", "Machine Learning", "Web Development"],
  authors: [{ name: "Nick Goulart" }],
  openGraph: {
    title: "Nick Goulart - Computer Science Student & Developer",
    description: "Portfolio of Nick Goulart, a passionate Computer Science student from Cal State University Fullerton.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Goulart - Computer Science Student & Developer",
    description: "Portfolio of Nick Goulart, a passionate Computer Science student from Cal State University Fullerton.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
