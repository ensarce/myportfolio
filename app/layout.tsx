import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ensar Kaplan - Full Stack Developer",
  description: "Full Stack Developer specializing in Angular, C#/.NET, Java, and healthcare software solutions. Building enterprise-grade applications at Hisar Intercontinental Hospital, Istanbul.",
  keywords: ["Full Stack Developer", "Angular", "TypeScript", "C#", ".NET", "Java", "Spring Boot", "Healthcare Software", "Istanbul", "Ensar Kaplan"],
  authors: [{ name: "Ensar Kaplan" }],
  creator: "Ensar Kaplan",
  openGraph: {
    title: "Ensar Kaplan - Full Stack Developer",
    description: "I build apps that solve real problems. Full Stack Developer specializing in healthcare software solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Ensar Kaplan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ensar Kaplan - Full Stack Developer",
    description: "I build apps that solve real problems. Full Stack Developer specializing in healthcare software solutions.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
