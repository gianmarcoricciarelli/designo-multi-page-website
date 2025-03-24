import Button from '@components/button/button'
import Text from '@components/text/text'
import FacebookIcon from '@shared-assets/desktop/icon-facebook.svg?react'
import InstagramIcon from '@shared-assets/desktop/icon-instagram.svg?react'
import PinterestIcon from '@shared-assets/desktop/icon-pinterest.svg?react'
import TwitterIcon from '@shared-assets/desktop/icon-twitter.svg?react'
import YoutubeIcon from '@shared-assets/desktop/icon-youtube.svg?react'
import logoLightPath from '@shared-assets/desktop/logo-light.png'
import styles from './footer.module.scss'

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
                <div className={styles['footer__content__socials']}>
                    <FacebookIcon />
                    <YoutubeIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                    <InstagramIcon />
                </div>
            </div>
            <div className={styles['footer__call-to-action']}>
                <Text
                    fontSize={32}
                    lineHeight={36}
                    fontWeight='medium'
                    color='white'
                >
                    Let’s talk about your project
                </Text>
                <Text lineHeight={25} fontSize={15}>
                    Ready to take it to the next level? Contact us today and
                    find out how our expertise can help your business grow.
                </Text>
                <Button>
                    <Text
                        fontWeight='medium'
                        letterSpacing={1}
                        color='dark-grey'
                    >
                        GET IN TOUCH
                    </Text>
                </Button>
            </div>
            {/* <BigCircleCallToActionImgIcon /> */}
        </div>
    )
}
