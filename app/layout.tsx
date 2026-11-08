import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayyoub El Kanaany — Développeur Full-Stack & Tech Lead",
    template: "%s | Ayyoub El Kanaany",
  },
  description:
    "Développeur Full-Stack Java, Spring Boot et Angular, Ayyoub El Kanaany accompagne la conception et la livraison de produits web robustes.",
  applicationName: "Portfolio Ayyoub El Kanaany",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["en_US"],
    title: "Ayyoub El Kanaany — Développeur Full-Stack & Tech Lead",
    description:
      "Des applications web fiables, pensées avec soin du front-end au back-end.",
    siteName: "Ayyoub El Kanaany",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayyoub El Kanaany — Développeur Full-Stack & Tech Lead",
    description:
      "Des applications web fiables, pensées avec soin du front-end au back-end.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
