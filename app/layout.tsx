import type { Metadata } from "next";
import "./globals.css";
import { Oswald, Source_Sans_3 } from "next/font/google";
import {ApolloWrapper} from "./lib/apollo-provider";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-head",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "AISAPH-CV – Formação Internacional em Socorrismo e APH",
  description: "Cursos de socorrismo e atendimento pré-hospitalar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${oswald.variable} ${sourceSans.variable}`}>
       <ApolloWrapper>

        {children}
       </ApolloWrapper>
      </body>
    </html>
  );
}