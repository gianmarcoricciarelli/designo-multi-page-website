import FirstSection from './first-section/first-section'
import styles from './home.module.scss'
import SecondSection from './second-section/second-section'
import ThirdSection from './third-section/third-section'

export default function Home() {
    return (
        <div className={styles['home']}>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}
