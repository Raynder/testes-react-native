import React from 'react'
import { View, Pressable } from 'react-native'
import { styles } from './style'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { GestureDetector, Gesture } from 'react-native-gesture-handler'

export default function Touchs() {

    const position = useSharedValue(100)
    const dobleTap = useSharedValue(0);

    const onPress = () => {
        position.value = withTiming(150)
    }

    const onPress2 = () => {
        position.value = withTiming(100)
    }

    const onGesture = Gesture
        .Tap()
        .numberOfTaps(2)
        .onStart(() => {
            dobleTap.value = withTiming(0)
        })

    const animateStyle = useAnimatedStyle(() => ({
        width: position.value,
        height: position.value
    }))

    return (
        <View style={styles.container}>
            <GestureDetector gesture={onGesture}>
                <Pressable onPressOut={onPress2} onPressIn={onPress}>
                    <Animated.View style={[styles.box, animateStyle]}/>
                </Pressable>
            </GestureDetector>
        </View>
    )
}