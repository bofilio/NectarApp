import React from 'react'
import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import theme from '../theme/theme'
import GestureRecognizer from 'react-native-swipe-gestures';

function SplashScreen({navigation}) {
    const nextScreen = "OnBording"
    const onSwipLeft = (gestureState) => {

        nextScreen && navigation.navigate(nextScreen)

    }
    const onSwipeRight = (gestureState) => {
        navigation.goBack()
    }
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    return (
        <GestureRecognizer style={{ flex: 1 }} config={config} onSwipeLeft={(state) => onSwipLeft(state)} onSwipeRight={(state) => onSwipeRight(state)} >
            <View style={styles.welcom}>
                <Image source={require('../assets/logo.png')} />
            </View>
        </GestureRecognizer>
    )
}
const styles = StyleSheet.create({
    welcom: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: theme.palette.primary
    },
})
export default SplashScreen
