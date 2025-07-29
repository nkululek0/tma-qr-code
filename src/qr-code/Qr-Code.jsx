import qrIcon from "./assets/qr-code.svg"
import styles from "./styles.module.css"

export function QrCode() {
    return (
        <>
            <div className={styles.wrapper}>
                <img className={styles.image} src={qrIcon} alt="image of code qr code" />
            </div>
        </>
    )
}