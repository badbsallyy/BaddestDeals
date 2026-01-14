import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BaddestDeals | Die besten Deals für dich",
  description: "Entdecke die besten Deals und Angebote aus den beliebtesten Online-Shops Deutschlands. Spare Zeit und Geld mit handverlesenen Schnäppchen.",
  keywords: "deals, angebote, schnäppchen, rabatte, sparen, online shopping",
  openGraph: {
    title: "BaddestDeals | Die besten Deals für dich",
    description: "Entdecke die besten Deals und Angebote aus den beliebtesten Online-Shops Deutschlands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body className="antialiased bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
