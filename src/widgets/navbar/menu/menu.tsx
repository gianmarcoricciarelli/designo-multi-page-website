import Text from '@components/text/text'
import { AnimatePresence, motion } from 'motion/react'
import styles from './menu.module.scss'

export default function Menu({ isVisible }: { isVisible: boolean }) {
    const menuItems = ['OUR COMPANY', 'LOCATIONS', 'CONTACT']

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
                        {menuItems.map((i) => (
                            <Text
                                key={i}
                                fontSize={24}
                                letterSpacing={2}
                                color='white'
                            >
                                {i}
                            </Text>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
