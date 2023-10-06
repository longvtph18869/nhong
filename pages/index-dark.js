import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <Layout dark>
      <Head>
        <title>Dizme | Home</title>
      </Head>
      <Home dark />
      {/* HERO */}
      {/* PROCESS */}
      <Process dark />
      {/* /PROCESS */}
      {/* ABOUT */}
      <About dark />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills dark />
      {/* /SKILLS */}
      {/* SERVICES */}
      <Service dark />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      <Partners dark />
      {/* /PARTNERS */}
      {/* NEWS */}
      <News />
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;
