import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";

// Configuring the font 
const poppins = Poppins({
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'], 
  variable: '--font-poppins', 
});

export const metadata: Metadata = {
  title: "OMA Natura Costa Rica",
  description: "Get to know the best of the Costa Rican Rainforest with OMA Natura.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  //As per NextJS 15, params have to awaited: https://nextjs.org/docs/messages/sync-dynamic-apis
  params: Promise<{ locale: string }>
}) {
  const {locale} = await params;

  return (
    //Setting HTML lang propert based on params
    <html lang={locale}>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
