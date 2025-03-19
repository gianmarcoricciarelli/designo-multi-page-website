import { ReactNode } from 'react'
import { Color } from '../types'

interface TextProps {
    type: 'h1' | 'h2' | 'h3' | 'body'
    color: Color
    children: ReactNode
}

enum FontSize {
    h1 = '48px',
    h2 = '40px',
    h3 = '20px',
    body = '16px'
}

export default function Text({ type, children }: TextProps) {
    return (
        <span
            style={{
                fontSize: FontSize[type],
                fontWeight: type === 'body' ? 400 : 500,
                lineHeight: type === 'h1' || type === 'h2' ? '48px' : '26px',
                wordSpacing:
                    type === 'h2' ? '+2px' : type === 'h3' ? '+5px' : '+0px'
            }}
        >
            {children}
        </span>
    )
}
