import styles from '@/styles/About.module.css'
import SectionTitle from './SectionTitle.jsx'
export default function About() {
    return (
        <div id="about">
            <div className="container">
                <SectionTitle>
                    About Me
                </SectionTitle>
                <div className={`${styles['about-content']}`}>
                    <p>
                        Hi there👋 I&apos;m Abrar — a full stack web developer based in Qatar. I build solutions for
                        the web - web apps, websites, plugins, widgets and more. I&apos;m passionate about motorsports, swimming, video
                        games and of course, coding.
                    </p>
                    <p>
                        I&apos;ve worked with a wide range of clients from business owners to dev teams in areas like logistics,
                        research, electronics and others. I&apos;ve worked mostly with the Javascript ecosystem of libraries and
                        frameworks for both frontend and backend, along with some python and wordpress.
                    </p>
                    <p>
                        Whether you are a business owner looking to boost your online presence, an entrepreneur with an innovative
                        idea in mind for an app, a developer looking to collab, or just wanting to say hi, let&apos;s <a
                            href="#contact">get in touch</a> and work together.
                    </p>
                    <p>
                        My skills include:
                    </p>
                    <ul className={styles.skills}>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Node.js</li>
                        <li>Next.js</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>VueJS</li>
                        <li>WordPress</li>
                        <li>jQuery</li>
                        <li>TailwindCSS</li>
                        <li>Sass</li>
                        <li>Bootstrap</li>
                    </ul>
                    <p>Some companies I&apos;ve worked with:</p>
                    <ul className={styles.companies}>
                        <li>
                            <a href="https://www.solverminds.com/">Solverminds</a>
                        </li>
                        <li>
                            <a href="https://www.974perfumes.com">974Perfumes</a>
                        </li>
                        <li>
                            <a href="#contact">
                                +
                                Add Yours
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}