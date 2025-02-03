import styles from '@/styles/Contact.module.css'
import SectionTitle from './SectionTitle.jsx'
import GithubLogo from '@/public/github-142-svgrepo-com.svg'
import LinkedinLogo from '@/public/linkedin-rounded-svgrepo-com.svg'
import EmailLogo from '@/public/email-svgrepo-com.svg'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from 'react';
import fadeInFrom from '@/data/fadeIn.js';


gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Contact() {
    const contact = useRef(null)

    useGSAP(() => {
        gsap.from(`.${styles.contact} > div > *:not(.section-title)`, {
            ...fadeInFrom,
            scrollTrigger: {
                trigger: `*:nth-child(2)`,
                start: "top bottom-=100px",
            }
        })
    }, { scope: contact })
    return (
        <section id='contact' ref={contact} className={styles.contact}>
            <div>
                <SectionTitle>
                    Get In Touch
                </SectionTitle>
                <div className={styles.email}>
                    <a href="mailto:abrarshahriarhossain@gmail.com">
                        <EmailLogo />
                        abrarshahriarhossain@gmail.com
                    </a>
                </div>
                <div className={styles.links}>
                    <a className={styles["link-box"]} href="https://github.com/Abrar74774" target="_blank">
                        <GithubLogo />
                        <div className={styles.text}>
                            Github
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/abrar-hossain-069505196/" target="_blank" className={styles["link-box"]}>
                        <LinkedinLogo />
                        <div className={styles.text}>
                            Linkedin
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}