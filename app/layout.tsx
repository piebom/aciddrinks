import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "ACID - Non-Alcoholic Aperitif | Exclusive Pre-Launch April 2026",
  description: "Join the first places to serve ACID, a ready-to-drink, vinegar-based, spicy non-alcoholic aperitif. Coming to Belgium in April 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={ibmPlexSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Acid+Green&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans bg-stone-50">{children}</body>
    </html>
  );
}
