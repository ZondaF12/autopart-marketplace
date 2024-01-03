import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Providers } from "../context/providers";
import { Rubik } from "next/font/google";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";
import ClientProviders from "../context/AuthProvider/ClientProviders";
import { ReactNode } from "react";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Foo Bar",
    description: "Baz",
};

export default async function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    const session = await getServerSession(authOptions);
    console.log(session);

    return (
        <ClientProviders>
            <html lang="en" className="">
                <body className={`${rubik.className} `}>
                    <Providers>
                        <div className="flex flex-col min-h-screen">
                            <Header session={session} />
                            <div className="">{children}</div>
                            <footer className="mt-auto">
                                <Footer />
                            </footer>
                        </div>
                    </Providers>
                </body>
            </html>
        </ClientProviders>
    );
}
