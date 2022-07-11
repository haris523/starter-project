import React from 'react'
import { View, StyleSheet } from 'react-native'

export interface ContainerProps {
    children: React.ReactNode
    style?: any
}
const Container = ({ children, style }: ContainerProps) => (
    <View style={[localStyles.container, { ...style }]}>{children}</View>
)

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})
export default Container
