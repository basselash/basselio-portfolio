import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text, Fraunces } from "next/font/google";
import "./globals.css";

const wixMadeforDisplay = Wix_Madefor_Display({
  variable: "--font-wix-madefor-display",
  subsets: ["latin"],
  weight: ["700"],
});

const wixMadeforText = Wix_Madefor_Text({
  variable: "--font-wix-madefor-text",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Used only inside individual project cards (e.g. Coin & Cloth) to give
// that project its own typographic identity — not part of the portfolio's
// own type system, which stays on Wix Madefor throughout.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Bassel Azab — UI/UX Designer & Front-End Developer",
  description:
    "Portfolio of Bassel Ashraf Ali Azab — UI/UX designer and front-end developer studying CS at Nile University.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${wixMadeforDisplay.variable} ${wixMadeforText.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
