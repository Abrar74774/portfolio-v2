import Head from "next/head";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Projects from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";
import TrianglesBackground from "@/components/TrianglesBackground.jsx";
import { useEffect } from "react";
export default function Home() {

  useEffect(() => {
    const lastAccessedDate = window.localStorage.getItem('abrar-portfolio-last-accessed')
    const date = new Date()
    const currentDate = date.toLocaleDateString()

    if (lastAccessedDate !== currentDate) {
      window.localStorage.setItem('abrar-portfolio-last-accessed', currentDate)

      const sessionInfo = {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        userTime: date.toLocaleString()
      }
  
      fetch('/api/analytics', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sessionInfo)
      })
    } 

  }, [])
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio website of Abrar Shahriyar - A Fullstack Developer based in Qatar" />
        <meta name="keywords" content="Abrar, Shahriyar, Fullstack, Developer, Qatar" />
        <meta name="author" content="Abrar Shahriyar"></meta>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Abrar Shahriyar | Full Stack Developer</title>
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
