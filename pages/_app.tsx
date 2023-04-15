import type { AppProps } from "next/app";
import "../styles/style.css";
import { Router } from "next/router";
import { useState } from "react";
import Loader from "@/components/loader/Loader";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });
  return (
    <>
      {loading && <Loader />}
      {!loading && <Component {...pageProps} />}{" "}
    </>
  );
}
