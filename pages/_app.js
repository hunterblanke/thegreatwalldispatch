import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const saved = localStorage.getItem("gwd-theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
