import styles from '@/styles/Navbar.module.css'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Navbar() {
    console.log(`${styles.navbar} ${styles["nav-background"]}`)

    useGSAP(() => {
        gsap.from(`.${styles.navbar} .${styles["nav-background"]}`, {
            scrollTrigger: {
                trigger: `#about`,
                toggleActions: "play none none reverse",
                start: "top bottom",
                end: "+=100",
                
            },
            x: '-100vw',
            ease: "power2.in",
            duration: 0.5
        })
    })
    return (
        <nav className={styles.navbar}>
            <div className={`${styles["nav-background"]}`}></div>
            <div className={`${styles["nav-content"]}`}>
                <a href="#about">
                    About
                </a>
                <a href="#portfolio">
                    Works
                </a>
                <a href="#contact">
                    Contact
                </a>
                <a href="https://github.com/Abrar74774" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/abrar-hossain-069505196/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </nav>
    )
}