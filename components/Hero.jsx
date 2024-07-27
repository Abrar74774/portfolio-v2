import styles from '@/styles/Hero.module.css'
import Navbar from './Navbar.jsx'
import { useRef, useState } from 'react'
import gsap from 'gsap/dist/gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const mouseMoveDivisor = 60

export default function Hero() {
    const [ coords, setCoords ] = useState({x: 0, y:0})
    const homeContainer = useRef(null)
    const handleMouseMove = e => {
        setCoords({
            x: -e.clientX / mouseMoveDivisor,
            y: -e.clientY / mouseMoveDivisor
        })
    }

    useGSAP(() => {
        gsap.from(`.${styles.hello} .frame div`, {
            yPercent: 100,
            ease: "power2.out",
            stagger: 0.5,
            duration: 1.5,
            delay: 0.3
        })
    }, { scope: homeContainer})

    return (
        <div className={styles.home}>
            <div className={styles.homepic} style={{ transform: `translateX(${coords.x}px) translateY(${coords.y}px)`}}>
                <video autoPlay muted loop>
                    <source src="vid/blue.webm" type="video/webm" />
                    <source src="vid/blue.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={`${styles["home-content"]}`} onMouseMove={handleMouseMove}>
                <Navbar />
                <div className={`${styles["hello-container"]}`} ref={homeContainer}>
                    <h1 className={styles.hello}>
                        <div className="frame">
                            <div>
                                Hello. I&apos;m <span className={styles.glow}>Abrar Shahriyar Hossain</span><br />
                            </div>
                        </div>
                        <div className="frame">
                            <div>
                                I&apos;m A Full Stack Developer.
                            </div>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    )
}