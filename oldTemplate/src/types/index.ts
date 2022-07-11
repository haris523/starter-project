import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import React from 'react'

//navigation types
export type Navigation = NavigationProp<ParamListBase>
export type Route = RouteProp<ParamListBase, string>

//style type
export type Style = React.CSSProperties | React.CSSProperties[]