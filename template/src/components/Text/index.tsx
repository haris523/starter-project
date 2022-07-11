import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors, sizes } from './constants'
import { Style } from 'types'

export interface TextProps {
    children: string | JSX.Element | React.ReactNode | null
    size?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'h7'
        | 'b1'
        | 'b2'
        | 'b3'
        | 'b4'
    color?: 'white' | 'black'
    weight?: 'default' | 'medium' | 'bold' | 'light' | 'thin' | 'italic'
    style?: Style | null
    center?: boolean
    otherProps?: null
}

const CustomText = ({
    children,
    size = 'b1',
    color = 'black',
    style = null,
    center = false,
    otherProps = null
}: TextProps) => (
    <Text
        {...otherProps}
        style={[
            {
                fontSize: sizes[size],
                color: colors[color],
                textAlign: center
                    ? localStyles.centerText
                    : localStyles.leftText
            },
            style != null && Array.isArray(style) ? [...style] : { ...style }
        ]}>
        {children}
    </Text>
)

const localStyles = StyleSheet.create({
    centerText: {
        textAlign: 'center'
    },
    leftText: {
        textAlign: 'left'
    }
})
export default CustomText
