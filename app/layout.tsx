import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bishal Ghimire - UI/UX Designer",
  description: "Portfolio of Bishal Ghimire, a UI/UX designer creating intuitive and engaging digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}