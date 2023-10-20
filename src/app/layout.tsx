"use client";

import Footer from "./components/Footer";
import MainNavbar from "./components/Navbar";
import "./globals.css";
import { Providers } from "./context/providers";

import { Rubik } from "next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="">
            <body className={rubik.className}>
                <Providers>
                    <MainNavbar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
