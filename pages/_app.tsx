import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-500 min-h-screen">
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
