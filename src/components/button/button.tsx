import { MouseEventHandler, ReactNode } from 'react'
import styles from './button.module.scss'

interface ButtonProps {
    background?: 'light' | 'dark'
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: ReactNode
}

export default function Button({
    background = 'light',
    onClick,
    children
}: ButtonProps) {
    return (
        <button
            style={{
                backgroundColor:
                    background === 'light' ? 'var(--white)' : 'var(--peach)'
            }}
            className={styles['button']}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
