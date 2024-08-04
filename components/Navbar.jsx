import styles from '@/styles/Navbar.module.css'
import Hamburger from '@/public/hamburger-svgrepo-com.svg'
import Logo from '@/public/logo.svg'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from 'react';


gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useGSAP(() => {
        gsap.set(`.${styles["nav-content"]}`, {
            opacity: 1
        })

        gsap.from(`.${styles["nav-content"]} a`, {
            opacity: 0,
            y: 5,
            stagger: 0.2,
            ease: "power4.out",
            duration: 1,
            delay: 1.5
        })

        gsap.set(`.${styles.navbar} .${styles["nav-background"]}`, {visibility: 'visible'})
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

    useEffect(() => {
        if (window.screen.width < 600) {
            setIsMobile(true)
        } else {
            setOpen(true)
        }
    }, [])

    
    const handleBurgerClick = (e) => {
        setOpen(!open)
    };


    const handleLinkClick = (e) => {
        if (isMobile) setOpen(false)
    };



    return (
        <nav className={styles.navbar}>
            <div className={`${styles["nav-background"]} not-mobile`}></div>
            <div className={`${styles["nav-content"]}`} style={!open ? { visibility: 'hidden' } : {}}>
                <a href="#" className={`${styles.logo} not-mobile`} onClick={handleLinkClick}>
                    <Logo />
                </a>
                <a href="#about" onClick={handleLinkClick}>
                    About
                </a>
                <a href="#portfolio" onClick={handleLinkClick}>
                    Works
                </a>
                <a href="#contact" onClick={handleLinkClick}>
                    Contact
                </a>
            </div>
            <div className={`${styles['mobile-logo']} mobile`} onClick={handleBurgerClick}>
                <Logo />
            </div>
            <div className={`${styles['hamburger-container']} mobile`} onClick={handleBurgerClick}>
                <Hamburger />
            </div>
        </nav>
    )
}