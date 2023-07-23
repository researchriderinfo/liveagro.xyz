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
        <title>Liveagro</title>
        <meta
          name="description"
          content="Liveagro is always prepared to do any agro production with relation to ICT and research based platforms."
        />
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
