import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Abrar Shahriar Hossain</title>
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      
      <div>
        <Hero />
        <About /> 
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
