import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./providers";
import { AppbarClient } from "../components/AppbarClient";
import { ThemeProvider } from "@/components/theme-provider";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ZapWallet",
  description: "Payments That Never Miss a Beat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="w-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex h-[40rem] w-full overflow-hidden bg-lime-50 dark:bg-black/[0.96]  antialiased justify-center">
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none"
                )}
              />
              <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="#1bbcc4"
              />
              <div className="relative z-10 w-full max-w-7xl">
                <AppbarClient />
                <div className="mx-5">{children}</div>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}
