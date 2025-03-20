import styles from './navbar.module.scss'
import HamburgerIcon from '@shared-assets/mobile/icon-hamburger.svg?react'
import darkLogoImgPath from '@shared-assets/desktop/logo-dark.png'

export default function NavBar() {
    return (
        <div className={styles['navbar']}>
            <img src={darkLogoImgPath} alt='Designo Logo' />
            <HamburgerIcon />
        </div>
    )
}
