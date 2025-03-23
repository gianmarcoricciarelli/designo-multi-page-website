import Text from '@components/text/text'
import FriendlyIcon from '@home-assets/desktop/illustration-friendly.svg?react'
import PassionateIcon from '@home-assets/desktop/illustration-passionate.svg?react'
import ResourcefulIcon from '@home-assets/desktop/illustration-resourceful.svg?react'
import SmallCircleIcon from '@shared-assets/desktop/bg-pattern-small-circle.svg?react'
import styles from './third-section.module.scss'

export default function ThirdSection() {
    return (
        <div className={styles['third-section']}>
            <div className={styles['third-section__card']}>
                <PassionateIcon style={{ zIndex: 2 }} />
                <div className={styles['third-section__card__text-box']}>
                    <Text fontSize='medium' letterSpacing={5} color='dark-grey'>
                        PASSIONATE
                    </Text>
                    <Text color='dark-grey'>
                        Each project starts with an in-depth brand research to
                        ensure we only create products that serve a purpose. We
                        merge art, design, and technology into exciting new
                        solutions.
                    </Text>
                </div>
                <SmallCircleIcon style={{ position: 'absolute', zIndex: 1 }} />
            </div>
            <div className={styles['third-section__card']}>
                <ResourcefulIcon style={{ zIndex: 2 }} />
                <div className={styles['third-section__card__text-box']}>
                    <Text fontSize='medium' letterSpacing={5} color='dark-grey'>
                        RESOURCEFUL
                    </Text>
                    <Text color='dark-grey'>
                        Everything that we do has a strategic purpose. We use an
                        agile approach in all of our projects and value customer
                        collaboration. It guarantees superior results that
                        fulfill our clients’ needs.
                    </Text>
                </div>
                <SmallCircleIcon style={{ position: 'absolute', zIndex: 1 }} />
            </div>
            <div className={styles['third-section__card']}>
                <FriendlyIcon style={{ zIndex: 2 }} />
                <div className={styles['third-section__card__text-box']}>
                    <Text fontSize='medium' letterSpacing={5} color='dark-grey'>
                        FRIENDLY
                    </Text>
                    <Text color='dark-grey'>
                        We are a group of enthusiastic folks who know how to put
                        people first. Our success depends on our customers, and
                        we strive to give them the best experience a company can
                        provide.
                    </Text>
                </div>
                <SmallCircleIcon style={{ position: 'absolute', zIndex: 1 }} />
            </div>
        </div>
    )
}
