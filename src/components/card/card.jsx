import styles from "./styles.module.css"
import { QrCode } from "./components/qr-code"
import { Text } from "./components/text"

export function Card() {

    const cardHeading = "Improve your front-end skills by building projects"
    const cardTextContent = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"

    return (
        <>
            <div className={styles.wrapper}>
                <QrCode />
                <Text heading={cardHeading} textContent={cardTextContent}/>
            </div>
        </>
    )
}