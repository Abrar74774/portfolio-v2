import Head from "next/head";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";
import TrianglesBackground from "@/components/TrianglesBackground.jsx";
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
        <main>
          <TrianglesBackground />
          <About /> 
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
