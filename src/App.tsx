import styles from './App.module.scss'
import NavBar from './widgets/navbar/navbar'

export default function App() {
    return (
        <div className={styles['app']}>
            <NavBar />
        </div>
    )
}
