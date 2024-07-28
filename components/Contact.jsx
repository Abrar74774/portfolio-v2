import styles from '@/styles/Contact.module.css'
import SectionTitle from './SectionTitle.jsx'
import Image from 'next/image.js'
export default function Contact() {
    return (
        <div id='contact' className={styles.contact}>
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
    )
}