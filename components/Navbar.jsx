import styles from '@/styles/Navbar.module.css'
import Hamburger from '@/public/hamburger-svgrepo-com.svg'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from 'react';


gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Navbar() {
    const [open, setOpen] = useState(false)

    useGSAP(() => {
        gsap.set(`.${styles["nav-content"]}`, {
            opacity: 1
        })

        if (open) {
            gsap.from(`.${styles["nav-content"]} a`, {
                opacity: 0,
                y: 5,
                stagger: 0.2,
                ease: "power4.out",
                duration: 1,
                delay: 1.5
            })
        }
        
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

    // useGSAP(() => {
    //     if (open) {
    //         gsap.from(`.${styles["nav-content"]} a`, {
    //             opacity: 0,
    //             y: 5,
    //             stagger: 0.2,
    //             ease: "power4.out",
    //             duration: 1
    //         })
    //     } 
    // }, [open])

    useEffect(() => {
        if (window.screen.width > 600) {
            setOpen(true)
        }
    }, [])
    
    const handleBurgerClick = (e) => {
        setOpen(!open)
    };


    const handleLinkClick = (e) => {
        setOpen(false)
    };



    return (
        <nav className={styles.navbar}>
            <div className={`${styles["nav-background"]} not-mobile`}></div>
            <div className={`${styles["nav-content"]}`} style={!open ? { visibility: 'hidden' } : {}}>
                <a href="#about" onClick={handleLinkClick}>
                    About
                </a>
                <a href="#portfolio" onClick={handleLinkClick}>
                    Works
                </a>
                <a href="#contact" onClick={handleLinkClick}>
                    Contact
                </a>
                <a onClick={handleLinkClick} href="https://github.com/Abrar74774" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a onClick={handleLinkClick} href="https://www.linkedin.com/in/abrar-hossain-069505196/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            <div className={`${styles['hamburger-container']} mobile`} onClick={handleBurgerClick}>
                <Hamburger />
            </div>
        </nav>
    )
}