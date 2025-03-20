import { ReactNode } from 'react'
import { Color } from '../types'
import styles from './text.module.scss'
import clsx from 'clsx'

interface TextProps {
    type: 'h1' | 'h2' | 'h3' | 'body'
    color: Color
    children: ReactNode
}

export default function Text({ color, type, children }: TextProps) {
    switch (type) {
        case 'h1':
            return (
                <h1
                    style={{
                        color: `var(--${color})`
                    }}
                    className={clsx(styles['text'], styles['text__h1'])}
                >
                    {children}
                </h1>
            )
        case 'h2':
            return (
                <h2
                    style={{
                        color: `var(--${color})`
                    }}
                    className={clsx(styles['text'], styles['text__h2'])}
                >
                    {children}
                </h2>
            )
        case 'h3':
            return (
                <h3
                    style={{
                        color: `var(--${color})`
                    }}
                    className={clsx(styles['text'], styles['text__h3'])}
                >
                    {children}
                </h3>
            )
        default:
            return (
                <p
                    style={{
                        color: `var(--${color})`
                    }}
                    className={clsx(styles['text'], styles['text__body'])}
                >
                    {children}
                </p>
            )
    }
}
