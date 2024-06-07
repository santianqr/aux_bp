import "@/styles/globals.css";

//import { GeistSans } from "geist/font/sans";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc/react";
import { Header } from "./_components/header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Bumperpass | Web App",
  description:
    "Discover personalized license plates effortlessly! Easily create custom license plates based on your preferences. Get unique designs that reflect your style. Start customizing now!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <TRPCReactProvider>
          <div className="mx-auto max-w-screen-2xl px-2">
            <Header />
            {children}
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
