import clsx from 'clsx'
import { MouseEventHandler, ReactNode } from 'react'
import styles from './button.module.scss'

interface ButtonProps {
    width?: string | number
    height?: string | number
    background?: 'light' | 'dark'
    onClick?: MouseEventHandler<HTMLButtonElement>
    children: ReactNode
}

export default function Button({
    width = 152,
    height = 56,
    background = 'light',
    onClick,
    children
}: ButtonProps) {
    return (
        <button
            style={{ width, height }}
            className={clsx(styles['button'], {
                [styles['button--light']]: background === 'light',
                [styles['button--dark']]: background === 'dark'
            })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
