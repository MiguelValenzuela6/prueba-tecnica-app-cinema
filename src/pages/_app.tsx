import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MovieFlix",
  description: "Descubre y explora películas",
};

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    
      <div className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </div>

  );
}
