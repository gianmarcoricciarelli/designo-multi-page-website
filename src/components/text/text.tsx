import clsx from 'clsx'
import { CSSProperties, ReactNode } from 'react'
import { Color } from '../types'
import styles from './text.module.scss'

interface TextProps {
    type?: 'h1' | 'h2' | 'h3' | 'body'
    color?: Color
    style?: CSSProperties
    className?: string
    children: ReactNode
}

export default function Text({
    color = 'white',
    type,
    style,
    className,
    children
}: TextProps) {
    switch (type) {
        case 'h1':
            return (
                <h1
                    style={{
                        ...style,
                        color: `var(--${color})`
                    }}
                    className={clsx(
                        className,
                        styles['text'],
                        styles['text__h1']
                    )}
                >
                    {children}
                </h1>
            )
        case 'h2':
            return (
                <h2
                    style={{
                        ...style,
                        color: `var(--${color})`
                    }}
                    className={clsx(
                        className,
                        styles['text'],
                        styles['text__h2']
                    )}
                >
                    {children}
                </h2>
            )
        case 'h3':
            return (
                <h3
                    style={{
                        ...style,
                        color: `var(--${color})`
                    }}
                    className={clsx(
                        className,
                        styles['text'],
                        styles['text__h3']
                    )}
                >
                    {children}
                </h3>
            )
        case 'body':
            return (
                <p
                    style={{
                        ...style,
                        color: `var(--${color})`
                    }}
                    className={clsx(
                        className,
                        styles['text'],
                        styles['text__body']
                    )}
                >
                    {children}
                </p>
            )
        default:
            return (
                <span
                    style={{
                        ...style,
                        color: `var(--${color})`
                    }}
                    className={clsx(className, styles['text'])}
                >
                    {children}
                </span>
            )
    }
}
