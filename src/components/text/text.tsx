import clsx from 'clsx'
import { createElement, CSSProperties, ReactNode } from 'react'
import { Color } from '../types'
import styles from './text.module.scss'

interface TextProps {
    element?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
    fontSize?: 'regular' | 'medium' | 'large' | 'xlarge' | number
    fontWeight?: 'medium' | 'regular'
    lineHeight?: 'big' | 'small' | number
    letterSpacing?: string | number
    color?: Color
    style?: CSSProperties
    className?: string
    children: ReactNode
}

export default function Text({
    element = 'span',
    fontSize,
    fontWeight = 'regular',
    lineHeight = 'small',
    letterSpacing,
    color = 'white',
    style,
    className,
    children
}: TextProps) {
    return createElement(element, {
        style: {
            color: `var(--${color})`,
            fontSize:
                typeof fontSize === 'number' ? `${fontSize}px` : undefined,
            lineHeight:
                typeof lineHeight === 'number' ? `${lineHeight}px` : undefined,
            letterSpacing:
                typeof letterSpacing === 'string'
                    ? letterSpacing
                    : typeof letterSpacing === 'number'
                      ? `+${letterSpacing}px`
                      : undefined,
            ...style
        },
        className: clsx(className, styles['text'], {
            [styles['font-md']]: fontSize === 'medium',
            [styles['font-lg']]: fontSize === 'large',
            [styles['font-xlg']]: fontSize === 'xlarge',
            [styles['text-medium']]: fontWeight === 'medium',
            [styles['big-lineheight']]: lineHeight === 'big',
            [styles['small-lineheight']]: lineHeight === 'small'
        }),
        children
    })
}
