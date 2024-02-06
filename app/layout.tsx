import type { Metadata } from "next";
import {
  Barlow as FontSans,
  IBM_Plex_Serif as FontSerif,
  JetBrains_Mono as FontMono,
} from "next/font/google";
import "@/assets/global.scss";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navigation-bar";

export const fontSans = FontSans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "400", "500", "600", "700", "800", "900"],
});

export const fontSerif = FontSerif({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["200", "400", "500", "600", "700"],
});

export const fontMono = FontMono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["200", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "CV",
    template: "%s - CV",
  },
  description: "Personal Website",
  creator: "Julian Silva da Cunha",
  metadataBase: new URL("https://ultimatemercer.com/cv-website/"),
  openGraph: {
    title: "CV",
    description: "Personal Website",
    images: "/cv-logo.jpg",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Mercer",
    description: "Site pessoal",
    creator: "@nextjs",
    images: ["https://ultimatemercer/cv-website/cv-logo.jpg"], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased background-texture",
          fontSans.variable,
          fontMono.variable,
          fontSerif.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
