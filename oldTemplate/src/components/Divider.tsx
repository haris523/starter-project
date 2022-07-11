import React from 'react'
import { View } from 'react-native'

export interface DividerProps{
    size?: number
    direction?: 'h' | 'v'
}

const DEFAULT_DISTANCE = 10
const Divider = ({ size = DEFAULT_DISTANCE, direction = 'v' }: DividerProps) =>
    <View style={direction === 'h' ? { width:size } : { height:size }}/>


export default Divider