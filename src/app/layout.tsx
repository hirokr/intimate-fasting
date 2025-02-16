import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const openSans = localFont({
  src: [
    {
      path: "./fonts/OpenSans-ExtraBold.ttf",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "./fonts/OpenSans-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/OpenSans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/OpenSans-Light.ttf",
      weight: "300",
      style: "light",
    },
  ],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Intimate-Fasting",
  description: "Intimate-Fasting the best fasting app",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
