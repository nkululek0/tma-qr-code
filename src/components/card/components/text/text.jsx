import styles from "./styles.module.css"

export function Text({heading, textContent}) {
    return (
        <>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>
                    {heading}
                </h2>
                <p className={styles.text}>
                    {textContent}
                </p>
            </div>
        </>
    )
}