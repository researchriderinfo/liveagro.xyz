import Head from "next/head";
import Banner from "../component/Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "../component/About/About";
import LiveAgro from "../component/LiveAgro/LiveAgro";
import Objectives from "../component/Objectives/Objectives";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Head>
        <title>Live Agro</title>
        <meta name="description" content="Grow up Being a Researcher" />
        <link rel="icon" href="/logo.png" />
        <link
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Banner />
        <LiveAgro />
        <Objectives />
        <About />
      </main>
    </div>
  );
}
