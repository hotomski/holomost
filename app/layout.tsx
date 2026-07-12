import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HoloMost — Building the bridge between people and their preserved wisdom",
  description: "HoloMost is a technology company building tools that make human knowledge scalably available. Our flagship product is HoloPal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
