import styles from '@/styles/Project.module.css'
import Image from 'next/image.js'
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from 'react';


gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Project({ title, techs, site, source, img, description }) {
	const project = useRef(null)
	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `.${styles["desc-container"]}`,
				// toggleActions: "play none none reverse",
				start: "top bottom-=100px",
			},
		})


		tl.from(`.${styles["image-container"]} img`, {
			yPercent: 105,
			// opacity: 0,
			ease: 'power2.out',
			duration: 1
		})
		tl.from(`.${styles.project}:nth-child(even) .${styles["desc-text"]}`, {
			xPercent: -100,
			duration: 0.7,
			ease: 'power2.out',
		}, '<')
		tl.from(`.${styles.project}:nth-child(odd) .${styles["desc-text"]}`, {
			xPercent: 100,
			duration: 0.7,
			ease: 'power2.out',
		}, '<')

		tl.from(`.${styles["desc-container"]} > *:not(.${styles["desc-text-container"]}), .${styles["desc-text"]} p`, {
			opacity: 0,
			y: 5,
			duration: 0.5,
			stagger: 0.1,
			delay: 0.6
		}, '<')
	}, { scope: project })
	return (
		<div ref={project} className={styles.project}>
			<div className={`${styles["image-container"]}`}>
				<Image priority fill src={img} alt={title} style={{ objectFit: 'cover' }} />
			</div>
			<div className={`${styles["desc-container"]}`}>
				<div className={`${styles["desc-title"]}`}>
					{title}
				</div>
				<div className={`${styles["desc-text-container"]}`}>
					<div className={`${styles["desc-text"]}`}>
						<p dangerouslySetInnerHTML={{__html: description}}></p>
					</div>
				</div>
				<ul className={styles.techs}>
					{techs.map(tech => <li key={tech}>{tech}</li>)}
				</ul>
				<div className={`${styles["desc-links"]}`}>
					<a href={site}>Website</a>
					{source &&
						<a href={source}>Github</a>
					}
				</div>
			</div>
		</div>
	)
}