import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
            <link rel="icon" type="image/png" href="/images/iconPhoto.png" />
        </head>
        <body className={inter.className}>
            {children}
            <Footer/>
            <Analytics/>
            <SpeedInsights/>
        </body>
        </html>
    );
}

