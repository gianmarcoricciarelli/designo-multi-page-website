import Text from '@components/text/text'
import { AnimatePresence, motion } from 'motion/react'
import styles from './menu.module.scss'

export default function Menu({ isVisible }: { isVisible: boolean }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles['menu']}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                    <div className={styles['menu__options']}>
                        <Text type='h3' color='white'>
                            OUR COMPANY
                        </Text>
                        <Text type='h3' color='white'>
                            LOCATIONS
                        </Text>
                        <Text type='h3' color='white'>
                            CONTACT
                        </Text>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
