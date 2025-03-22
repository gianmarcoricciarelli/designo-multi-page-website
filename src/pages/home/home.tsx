import FirstSection from './first-section/first-section'
import styles from './home.module.scss'

export default function Home() {
    return (
        <div className={styles['home']}>
            <FirstSection />
        </div>
    )
}
