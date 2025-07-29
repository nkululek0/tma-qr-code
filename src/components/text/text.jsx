import styles from "./styles.module.css"

export function Text() {
    return (
        <>
            <div>
                <h2 className={styles.heading}>
                    Improve your front-end skills by building projects
                </h2>
                <p className={styles.text}>
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </>
    )
}