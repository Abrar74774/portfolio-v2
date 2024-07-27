import styles from '@/styles/Contact.module.css'
export default function Contact() {
    return (
        <div id='contact' className={styles.contact}>
            <h1 className="section-title frame">
                <div>
                    Get In Touch
                </div>
            </h1>
            <h2 className={styles.email}>
                <a href="mailto:abrarshahriarhossain@gmail.com">
                    abrarshahriarhossain@gmail.com
                </a>
            </h2>
            <div className={styles.links}>
                <a href="https://github.com/Abrar74774" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/abrar-hossain-069505196/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>  
    )
}