import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

import App from "next/app";
import Navbar from "@components/Navbar";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps, categories, locations }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Navbar categories={categories} locations={locations} />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const reqCategories = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/categories"
  );
  const categories = await reqCategories.json();

  const reqLocation = await fetch(
    process.env.NEXT_PUBLIC_APIURL + "/locations"
  );
  const locations = await reqLocation.json();

  return { ...appProps, categories, locations };
};

export default MyApp;
