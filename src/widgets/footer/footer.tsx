import Text from '@components/text/text'
import styles from './footer.module.scss'
import logoLightPath from '@shared-assets/desktop/logo-light.png'

export default function Footer() {
    const companyInfo = ['OUR COMPANY', 'LOCATIONS', 'CONTACT']

    return (
        <div className={styles['footer']}>
            <img src={logoLightPath} alt='Designo Logo' />
            <div className={styles['footer__content']}>
                <div className={styles['footer__content__divider']} />
                <div className={styles['footer__content__company-info']}>
                    {companyInfo.map((info) => (
                        <Text
                            key={info}
                            fontSize={14}
                            lineHeight={14}
                            letterSpacing={2}
                        >
                            {info}
                        </Text>
                    ))}
                </div>
                <div className={styles['footer__content__text-box']}>
                    <Text
                        style={{ color: 'rgb(97 97 97 / 0.9)' }}
                        fontWeight='medium'
                    >
                        Designo Central Office
                    </Text>
                    <Text style={{ color: 'rgb(97 97 97 / 0.9)' }}>
                        3886 Wellington Street
                    </Text>
                    <Text style={{ color: 'rgb(97 97 97 / 0.9)' }}>
                        {'Toronto, Ontario M9C 3J5'}
                    </Text>
                </div>
                <div className={styles['footer__content__text-box']}>
                    <Text
                        style={{ color: 'rgb(97 97 97 / 0.9)' }}
                        fontWeight='medium'
                    >
                        Contact Us (Central Office)
                    </Text>
                    <Text style={{ color: 'rgb(97 97 97 / 0.9)' }}>
                        P : +1 253-863-8967
                    </Text>
                    <Text style={{ color: 'rgb(97 97 97 / 0.9)' }}>
                        M : contact@designo.co
                    </Text>
                </div>
                <div className={styles['footer__content__socials']}>a</div>
            </div>
        </div>
    )
}
