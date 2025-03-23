import Button from '@components/button/button'
import Text from '@components/text/text'
import BackgroundPatternSvg from '@home-assets/desktop/bg-pattern-hero-home.svg?react'
import phoneImagePath from '@home-assets/mobile/phone-image-cropped.png'
import { MouseEventHandler } from 'react'
import styles from './first-section.module.scss'

export default function FirstSection() {
    const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
        console.log('click')
    }

    return (
        <div className={styles['first-section']}>
            <div className={styles['first-section__text-box']}>
                <Text fontSize={32} fontWeight='medium' lineHeight={36}>
                    Award-winning custom designs and digital branding solutions
                </Text>
                <Text lineHeight={25}>
                    With over 10 years in the industry, we are experienced in
                    creating fully responsive websites, app design, and engaging
                    brand experiences. Find out more about our services.
                </Text>
                <Button background='light' onClick={onButtonClick}>
                    <Text
                        fontWeight='medium'
                        letterSpacing={1}
                        color='dark-grey'
                    >
                        LEARN MORE
                    </Text>
                </Button>
            </div>
            <div className={styles['first-section__phone']}>
                <img src={phoneImagePath} />
            </div>
            <BackgroundPatternSvg
                className={styles['first-section__background-svg']}
            />
        </div>
    )
}
