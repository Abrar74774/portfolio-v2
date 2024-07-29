import styles from '@/styles/Contact.module.css'
import SectionTitle from './SectionTitle.jsx'
import Image from 'next/image.js'
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
                start: "top bottom-=200px",
            }
        })
    }, { scope: contact})
    return (
        <div id='contact' ref={contact} className={styles.contact}>
            <div>
                <SectionTitle>
                    Get In Touch
                </SectionTitle>
                <h2 className={styles.email}>
                    <a href="mailto:abrarshahriarhossain@gmail.com">
                        abrarshahriarhossain@gmail.com
                    </a>
                </h2>
                <div className={styles.links}>
                    <a href="https://github.com/Abrar74774" target="_blank">
                        <Image fill src="github-mark-white.svg" alt="github" style={{objectFit: 'contain'}}/>
                    </a>
                    <a href="https://www.linkedin.com/in/abrar-hossain-069505196/" target="_blank">
                        <Image fill src="/In-White-72.png" alt="linkedin" style={{objectFit: 'contain'}}/>
                        {/* <Image fill src="github-mark-white.svg" alt="github" style={{objectFit: 'contain'}}/> */}
                    </a>
                </div>
            </div>
        </div>  
    )
}