import { MouseEventHandler, ReactNode } from 'react'
import styles from './button.module.scss'
import clsx from 'clsx'

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
