import useTheme from 'hooks/useTheme'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler'
import Animated, {
    useSharedValue,
    useAnimatedGestureHandler,
    useAnimatedStyle
} from 'react-native-reanimated'
import FeatherIcon from 'react-native-vector-icons/Feather'

const Home = () => {
    const { theme } = useTheme()
    const xVal = useSharedValue(0)
    const yVal = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { x: number; y: number }
    >({
        onStart: (evt, ctx) => {
            ctx.x = xVal.value
            ctx.y = yVal.value
        },
        onActive: (evt, ctx) => {
            xVal.value = evt.translationX + ctx.x
            yVal.value = evt.translationY + ctx.y
        }
    })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: xVal.value }, { translateY: yVal.value }]
    }))
    return (
        <View style={localStyles.container}>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[localStyles.alignItems, animatedStyle]}>
                    <Text style={[{ color: theme.secondary }]}>Home</Text>
                    <FeatherIcon name="home" size={25} color={'white'} />
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {
        backgroundColor: '#1A72A5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    alignItems: {
        alignItems: 'center'
    }
})
export default Home
