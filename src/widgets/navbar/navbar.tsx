import darkLogoImgPath from '@shared-assets/desktop/logo-dark.png'
import HamburgerIcon from '@shared-assets/mobile/icon-hamburger.svg?react'
import { useState } from 'react'
import Menu from './menu/menu'
import styles from './navbar.module.scss'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className={styles['navbar']}>
            <img src={darkLogoImgPath} alt='Designo Logo' />
            <HamburgerIcon
                onClick={() => setIsMenuOpen((prevValue) => !prevValue)}
            />
            <Menu isVisible={isMenuOpen} />
        </div>
    )
}
