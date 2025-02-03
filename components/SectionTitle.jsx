import { useGSAP } from '@gsap/react'
import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SectionTitle({ children }) {
    const sectionTitle = useRef(null)
    useGSAP(() => {
        gsap.from("div", {
            scrollTrigger: {
                trigger: "div",
                start: "top 92%",
            },
            yPercent: 100,
            ease: "power3.out",
            duration: 1.2,
        })
    }, { scope: sectionTitle})

    return (
        <h1 ref={sectionTitle} className="section-title frame">
            <div>
                {children}
            </div>
        </h1>
    )
}