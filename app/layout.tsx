import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SignInButton, SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "./providers";

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
          <SignedIn></SignedIn>
          <SignedOut>
            <header className="flex justify-between items-center p-4 gap-4 h-auto">
              <div className="flex gap-6">
                <SignInButton />
                <SignUpButton />
              </div>
            </header>
          </SignedOut>

          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
