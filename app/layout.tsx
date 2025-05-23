
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  SignInButton,
  SignUpButton,
  SignedOut,
 
} from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import {
  ClerkProvider,
} from "@clerk/nextjs";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZTrack",
  description: "Easy to use Job tracker.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SignedOut>
            <header className="flex justify-between items-center p-4 gap-4 h-auto">
              <SignInButton />
              <SignUpButton />
            </header>
          </SignedOut>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
