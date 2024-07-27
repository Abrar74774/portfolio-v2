import styles from '@/styles/Project.module.css'
export default function Project({ title, techs, site, source, img, description }) {
    return (
        <div className={styles.project}>
          <div className={`${styles["image-container"]}`}>
            <img src="img/canvasnote.png" alt="canvasnote" />
          </div>
          <div className={`${styles["desc-container"]}`}>
            <div className={`${styles["desc-title"]}`}>
              {title}
            </div>
            <div className={`${styles["desc-text"]}`}>
              {description}
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