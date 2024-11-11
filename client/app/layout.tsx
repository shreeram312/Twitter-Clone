import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { AppWrapper } from "../context/index";

import { Toaster } from "react-hot-toast";

// Fonts setup
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const quicksand = localFont({
  src: "./fonts/Quicksand-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Twitter-clone-by-shreeram",
  description: "By-Shreeram",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${quicksand.variable}`}>
          {/* Flex container for alignment */}

          {/* SignedIn and SignedOut buttons on the right */}
          {/* <SignedOut>
              <SignInButton />
            </SignedOut> */}
          <AppWrapper>
            <div className="flex justify-end ">
              <SignedIn>
                <SignedOut />
              </SignedIn>
            </div>

            {/* Main content */}

            <main>{children}</main>
          </AppWrapper>

          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
