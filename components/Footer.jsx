import styles from '@/styles/Footer.module.css'
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div>
                    Designed and built by Abrar Shahriyar.
                </div>
                <div>
                    <a href="https://github.com/Abrar74774/portfolio-v2"
                        target="_blank">View Source Code</a>
                </div>
            </div>
        </footer>
    )
}