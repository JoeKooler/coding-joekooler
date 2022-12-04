import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Kanit } from "@next/font/google";

const kanit = Kanit({
  subsets: ["thai"],
  variable: "--font-kanit",
  style: ["normal", "italic"],
  weight: ["100", "200", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${kanit.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
