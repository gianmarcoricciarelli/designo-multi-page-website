import Text from '@components/text/text'
import appDesignImagePath from '@home-assets/mobile/image-app-design.jpg'
import graphicDesignImagePath from '@home-assets/mobile/image-graphic-design.jpg'
import webDesignImagePath from '@home-assets/mobile/image-web-design.jpg'
import RightArrowIcon from '@shared-assets/desktop/icon-right-arrow.svg?react'
import styles from './second-section.module.scss'

type CardType = 'webDesign' | 'appDesign' | 'graphicDesign'

export default function SecondSection() {
    const onCardClickHandler = (clickedCard: CardType) => {
        switch (clickedCard) {
            case 'webDesign': {
                console.log(clickedCard)
                return
            }
            case 'appDesign': {
                console.log(clickedCard)
                return
            }
            default: {
                console.log(clickedCard)
                return
            }
        }
    }

    return (
        <div className={styles['second-section']}>
            <div
                className={styles['second-section__card']}
                onClick={() => onCardClickHandler('webDesign')}
            >
                <div className={styles['second-section__card__text-box']}>
                    <Text fontSize={28} fontWeight='medium' lineHeight={36}>
                        WEB DESIGN
                    </Text>
                    <div
                        className={
                            styles[
                                'second-section__card__text-box__view-projects'
                            ]
                        }
                    >
                        <Text fontWeight='medium' letterSpacing={5}>
                            VIEW PROJECTS
                        </Text>
                        <RightArrowIcon />
                    </div>
                </div>
                <img src={webDesignImagePath} />
            </div>
            <div
                style={{ backgroundImage: `url(${appDesignImagePath})` }}
                className={styles['second-section__card']}
                onClick={() => onCardClickHandler('appDesign')}
            >
                <div className={styles['second-section__card__text-box']}>
                    <Text fontSize={28} lineHeight={36}>
                        APP DESIGN
                    </Text>
                    <div
                        className={
                            styles[
                                'second-section__card__text-box__view-projects'
                            ]
                        }
                    >
                        <Text fontWeight='medium' letterSpacing={5}>
                            VIEW PROJECTS
                        </Text>
                        <RightArrowIcon />
                    </div>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${graphicDesignImagePath})` }}
                className={styles['second-section__card']}
                onClick={() => onCardClickHandler('graphicDesign')}
            >
                <div className={styles['second-section__card__text-box']}>
                    <Text fontSize={28} lineHeight={36}>
                        GRAPHIC DESIGN
                    </Text>
                    <div
                        className={
                            styles[
                                'second-section__card__text-box__view-projects'
                            ]
                        }
                    >
                        <Text fontWeight='medium' letterSpacing={5}>
                            VIEW PROJECTS
                        </Text>
                        <RightArrowIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
