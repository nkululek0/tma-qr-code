import styles from "./styles.module.css"
import { QrCode } from "./components/qr-code"
import { Text } from "./components/text"

export function Card() {
    return (
        <>
            <div className={styles.main}>
                <QrCode />
                <Text />
            </div>
        </>
    )
}