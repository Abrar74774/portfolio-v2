import styles from '@/styles/Hero.module.css'

export default function Hero() {
    return (

        <div className={styles.home}>
            <div className={styles.homepic}>
                <video autoPlay muted loop>
                    <source src="vid/blue.webm" type="video/webm" />
                    <source src="vid/blue.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={`${styles["home-content"]}`}>
                <nav>
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
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/abrar-hossain-069505196/" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </nav>
                <div className={`${styles["hello-container"]}`}>
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