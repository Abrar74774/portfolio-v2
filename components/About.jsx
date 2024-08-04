import styles from '@/styles/About.module.css'
import SectionTitle from './SectionTitle.jsx'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from 'react';
import fadeInFrom from '@/data/fadeIn.js';
import Image from 'next/image.js';
import companies from '@/data/companies.js';


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
    const content = useRef(null)

    useGSAP(() => {
        gsap.matchMedia().add('(min-width: 600px)', () => {
            gsap.from(`img, .${styles['about-description']} > *, p, .${styles.companies}`, {
                ...fadeInFrom,
                scrollTrigger: {
                    trigger: `img`,
                    start: "bottom bottom",
                }
            })
        })

        gsap.matchMedia().add('(max-width: 600px)', () => {
            gsap.from(`img, .${styles['about-description']} > *`, {
                ...fadeInFrom,
                scrollTrigger: {
                    trigger: `img`,
                    start: "bottom bottom",
                }
            })
            gsap.from(`.container > p, .${styles.companies} > *`, {
                ...fadeInFrom,
                scrollTrigger: {
                    trigger: `.${styles.companies}`,
                    start: "top bottom",
                }
            })
        })

    }, { scope: content })
    return (
        <section id="about" ref={content}>
            <div className="container">
                <SectionTitle>
                    About Me
                </SectionTitle>
                <div className={`${styles['about-content']}`}>
                    <div className={`${styles["about-image-container"]}`}>
                        <Image alt="A photo of me" src={'/me.jpeg'} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className={`${styles["about-description"]}`}>
                        <p>
                            Hi there👋 I&apos;m Abrar — a full stack web developer based in Qatar. I build solutions for
                            the web - web apps, websites, plugins, widgets and more. I&apos;m passionate about motorsports, video
                            games, and of course, coding.
                        </p>
                        <p>
                            I&apos;ve worked with a wide range of clients from business owners to dev teams in sectors like logistics,
                            research, electronics and others. I work mostly with Javascript along with some Python.
                        </p>
                        <p>
                            Whether you are a business owner looking to boost your online presence, an entrepreneur with an innovative
                            app idea, a developer looking to collab on something cool, or just wanting to say hi, let&apos;s <a
                                href="#contact">get in touch</a> and build something great.
                        </p>
                        <p>
                            My skills include:
                        </p>
                        <ul className={styles.skills}>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>Node.js</li>
                            <li>Next.js</li>
                            <li>React</li>
                            <li>Angular</li>
                            <li>VueJS</li>
                            <li>WordPress</li>
                            <li>jQuery</li>
                            <li>TailwindCSS</li>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <br />
                <p>Some companies I&apos;ve worked with:</p>
                <ul className={styles.companies}>
                    {companies.map(company =>
                        <li key={company.name}>
                            <a href={company.src}>
                                <div className={`${styles["company-logo-container"]}`}>
                                    <Image src={company.image} fill style={{ objectFit: 'contain' }} alt={`${company.name} logo`} />
                                </div>
                            </a>
                        </li>
                    )}
                    <li>
                        <a href="#contact">
                            <div>
                                + Add Yours
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}