import type { AppProps } from "next/app";
import { createContext } from "react";
import { globalStyles } from "../styles/stitches.config";

export const UserContext = createContext<any>({
  pageProps: { data: { results: [] } },
});

function DemoApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}

export default DemoApp;
