import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pratham Patel",
  description: "Portfolio website of Pratham Patel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Pratham Patel</title>
        <link rel="icon" type="image" href="/images/icon.ico" />
        <meta
          name="description"
          content="Portfolio of Pratham Patel, Full Stack Developer specializing in MERN, Angular, .NET Core, and advanced projects."
        ></meta>
        <meta
          name="keyword"
          content="Pratham Patel, Full Stack Developer, MERN, Angular, .NET Core, Portfolio"
        ></meta>
        <meta name="author" content="Pratham Patel"></meta>
        <meta
          property="og:title"
          content="Pratham Patel - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Explore the work and projects of Pratham Patel, a Full Stack Developer skilled in MERN, ASP.NET, Angular, and more."
        />
        <meta property="og:image" content="/images/icon.ico" />
        <meta property="og:url" content="https://prathampatel.vercel.app" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
