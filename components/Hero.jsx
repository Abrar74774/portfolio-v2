import styles from '@/styles/Hero.module.css'
import Navbar from './Navbar.jsx'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap/dist/gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const mouseMoveDivisor = 60

export default function Hero() {
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const [isMobile, setIsMobile] = useState(false)
    const [isMobileSet, setIsMobileSet] = useState(false)

    const helloContainer = useRef(null)
    const handleMouseMove = e => {
        setCoords({
            x: -e.clientX / mouseMoveDivisor,
            y: -e.clientY / mouseMoveDivisor
        })
    }

    useGSAP(() => {
        if (isMobileSet) {
            gsap.set(`.${styles.hello}`, { visibility: 'visible' })
            gsap.from(`.${styles.hello} .frame div`, {
                yPercent: 110,
                ease: "power4.out",
                stagger: 0.2,
                duration: 2,
                delay: 0.3
            })
        }

    }, { scope: helloContainer, dependencies: [isMobileSet] })

    useEffect(() => {
        if (window.screen.width < 600) {
            setIsMobile(true)
        }
    }, [])

    useEffect(() => { setIsMobileSet(true)}, [isMobile])

    return (
        <header className={styles.home}>
            <div className={styles.homepic} style={{ transform: `translateX(${coords.x}px) translateY(${coords.y}px)` }}>
                <video autoPlay muted loop>
                    <source src="vid/blue.webm" type="video/webm" />
                    <source src="vid/blue.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={`${styles["home-content"]}`} onMouseMove={handleMouseMove}>
                <Navbar />
                <div ref={helloContainer} className={`${styles['hello-container']}`}>
                    {isMobile ?
                        <h1 className={styles.hello}>
                            <div className="frame">
                                <div>
                                    Hello. I&apos;m
                                </div>
                            </div>
                            <div className="frame">
                                <div>
                                <span className={styles.glow}>Abrar&nbsp;Shahriyar</span>
                                </div>
                            </div>
                            <div className="frame">
                                <div>
                                    I&apos;m A Full Stack 
                                </div>
                            </div>
                            <div className="frame">
                                <div>
                                    Developer.
                                </div>
                            </div>
                        </h1>
                        :
                        <h1 className={styles.hello}>
                            <div className="frame">
                                <div>
                                    Hello. I&apos;m <span className={styles.glow}>Abrar&nbsp;Shahriyar</span><br />
                                </div>
                            </div>
                            <div className="frame">
                                <div>
                                    I&apos;m A Full Stack Developer.
                                </div>
                            </div>
                        </h1>


                    }
                </div>
            </div>
        </header>
    )
}