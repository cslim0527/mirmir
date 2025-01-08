import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { Container } from "@radix-ui/themes";

import "./globals.css";
import "@radix-ui/themes/styles.css";
import Header from "@/components/Header";
import GlobalNavigation from "@/components/GlobalNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "미르의전설: 패왕전",
  description: "Legend of Mir for 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Theme appearance="dark">
          <Header />
          <GlobalNavigation />
          <Container size={{ sm: "1", lg: "4" }} px="16px" pb="120px">
            {children}
          </Container>
        </Theme>
      </body>
    </html>
  );
}
