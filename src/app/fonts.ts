import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const customFont = localFont({
  src: [{ path: "../app/fonts/Yourmate.ttf", weight: "400", style: "normal" }],
  variable: "--font-custom",
  display: "swap",
});
