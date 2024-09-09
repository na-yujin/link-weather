import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavigationLayout from "@/components/Layout/NavigationLayout";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <NavigationLayout>
      <Component {...pageProps} />
    </NavigationLayout>
  )
}
