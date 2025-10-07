import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

// const geistMono = Inter_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

export const metadata = {
  title: "Huzsky Online Learning Platform.",
  description: "Your #1 E-learning Platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
