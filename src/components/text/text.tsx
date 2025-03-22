import clsx from 'clsx'
import { createElement, CSSProperties, ReactNode } from 'react'
import { Color } from '../types'
import styles from './text.module.scss'

interface TextProps {
    element?: 'h1' | 'h2' | 'h3' | 'body'
    fontSize?: 'regular' | 'medium' | 'large' | 'xlarge' | number
    fontWeight?: 'medium' | 'regular'
    lineHeight?: 'big' | 'small' | number
    color?: Color
    style?: CSSProperties
    className?: string
    children: ReactNode
}

export default function Text({
    element,
    fontSize,
    fontWeight = 'regular',
    lineHeight = 'small',
    color = 'white',
    style,
    className,
    children
}: TextProps) {
    let component: string = ''

    if (element === 'body') {
        component = 'p'
    } else if (!element) {
        component = 'span'
    } else {
        component = element
    }

    return createElement(component, {
        style: {
            ...style,
            color: `var(--${color})`,
            fontSize:
                typeof fontSize === 'number' ? `${fontSize}px` : undefined,
            lineHeight:
                typeof lineHeight === 'number' ? `${lineHeight}px` : undefined
        },
        className: clsx(className, styles['text'], {
            [styles['h2']]: element === 'h2',
            [styles['h3']]: element === 'h3',
            [styles['font-rg']]: fontSize === 'regular',
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
