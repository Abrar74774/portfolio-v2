import Image from "next/image.js";
import styles from '@/styles/TrianglesBackground.module.css'
import Triangle from '@/public/triangle-svgrepo-com.svg'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numOfTriangles = 10
const triangleArray = [...Array(numOfTriangles).keys()].map(index => {
    return ({
        key: index,
        y: (100 / (numOfTriangles / index)) + getRandomInt(-5, 5) + "%",
    })
})

export default function TrianglesBackground() {
    useGSAP(() => {
        document.querySelectorAll(`.${styles.triangle} svg`).forEach(triangle => {
            gsap.to(triangle, {
                scrollTrigger: {
                    scrub: 0
                },
                y: (i, target) => ScrollTrigger.maxScroll(window) * getRandomInt(1, 4) * 0.1,
                ease: "none"
            });
            gsap.to(triangle, {
                rotate: 360,
                repeat: -1,
                duration: getRandomInt(20, 30),
                ease: 'none'
            })
        })

    })
    return (
        <div className={`${styles["triangles-container"]}`}>
            {triangleArray.map(triangle => {
                console.log("size", triangle.size)
                return (
                    <div className={styles.triangle} key={triangle.key} style={{
                        top: triangle.y,
                        left: triangle.x
                    }} >
                        {/* <Image fill src="/triangle-svgrepo-com.svg" alt="triangle" style={{ objectFit: 'contain' }} /> */}
                        <Triangle  />
                    </div>
                )
            }
            )}
        </div>
    )
}