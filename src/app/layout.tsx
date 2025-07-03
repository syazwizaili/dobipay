import React from "react";
import MyApp from "./app";
import NextTopLoader from "nextjs-toploader";
import "./global.css";
import {CustomizerContextProvider} from "./context/customizerContext";
import {SpeedInsights} from "@vercel/speed-insights/next";

export const metadata = {
  title: "DobiPay",
  description: "DobiPay - Your Laundry Payment Solution",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </head>
      <body>
        <NextTopLoader color="#5D87FF" />
        <CustomizerContextProvider>
          <MyApp>{children}</MyApp>
        </CustomizerContextProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
