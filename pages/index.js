import Head from "next/head";
import Banner from "../component/Banner/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "../component/About/About";
import LiveAgro from "../component/LiveAgro/LiveAgro";
import Objectives from "../component/Objectives/Objectives";
import Review from "../component/Review/Review";
import Contact from "../component/Contact/Contact";
import SoftwareFeature from "../component/SoftwareFeature/SoftwareFeature";
import style from "../styles/index.module.css"

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
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <main className={`${style.bgImg}`}>
        <Banner />
        <Objectives />
        <LiveAgro />
        <SoftwareFeature/>
        <About />
        <Contact/>
        {/* <Review/> */}
      </main>
    </div>
  );
}
