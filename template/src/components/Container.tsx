import React from 'react'
import { View } from 'react-native'

export interface ContainerProps{
    children: React.ReactNode
    style?: any
}
const Container = ({ children, style }: ContainerProps) => 
    <View
        style={[
            { flex: 1, backgroundColor: 'white' },
            { ...style },
        ]}>
        {children}
    </View>

export default Container