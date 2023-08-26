import styles from './vaccinecard.module.css'
import Image from 'next/image'

export default function VaccineCard() {
    return (
        <div className={styles.vaccineCard}>
            <div className={styles.vaccineCardImg}>
                <Image src={'/img/vaccineCard1.jpg'}
                alt='cover'
                fill={true}
                objectFit='cover'
                />
            </div>
            <div className={styles.vaccineCardText}>
                <h2>Why vaccination is important?</h2>
                <p>Vaccines teach your immune system how to create antibodies that protect you from diseases.</p>
            </div>
        </div>
    )
}