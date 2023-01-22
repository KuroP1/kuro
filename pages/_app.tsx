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

// const axios = require("axios").default;

// axios
//   .get(
//     "https://api.mozambiquehe.re/bridge?auth=f70ea231d8513fc9b1e8e21d22eedd02&player=chaoticbutpc&platform=PC"
//   )
//   .then((res) => {
//     console.log(res.data);
//   });
