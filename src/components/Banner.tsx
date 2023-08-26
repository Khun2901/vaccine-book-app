import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <Image src={'/img/nurseBanner.jpg'}
            alt='cover'
            fill={true}
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>Secure Your Future</h1>
                <h2>Get Vaccinated Today!</h2>
            </div>
        </div>
    )
}