import { DbProvider } from "@/providers/db-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DbProvider>
      <Component {...pageProps} />
    </DbProvider>
  );
}
