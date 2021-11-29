import React from 'react'
import { Image, Text, ImageBackground, StyleSheet, View, Button, Pressable } from 'react-native'
import theme from '../theme/theme'
import GestureRecognizer from 'react-native-swipe-gestures';

export default function OnBordingScreen({ navigation, }) {
    const nextScreen="Signin"
    const onSwipLeft=(gestureState)=>{

        if(nextScreen) navigation.navigate(nextScreen)
        
    }
    const onSwipeRight=(gestureState)=>{
        navigation.goBack()
    }
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };
    return (
        <GestureRecognizer style={{flex:1}} config={config}  onSwipeLeft={(state)=>onSwipLeft(state)} onSwipeRight={(state)=>onSwipeRight(state)} >
            <ImageBackground style={styles.container} source={require('../assets/man.png')}>
                
                <View style={styles.wraper}>
                    <Image source={require("../assets/carrot.png")} />
                    <Text style={styles.largetext}>Welcome {"\n"} to our store</Text>
                    <Text style={styles.subtitle}>Ger your groceries in as fast as one hour</Text>
                    <Pressable style={styles.button} onPress={()=>{navigation.navigate(nextScreen)}}>
                        <Text style={styles.btnText}>Get Started</Text>
                    </Pressable>
                </View>
                <View style={styles.bottomBar}>

                </View>
                
            </ImageBackground>
        </GestureRecognizer>
       

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    bottomBar:{
        height:90,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between"
    },
    wraper: {
        flex: 0.5,
        alignItems: 'center',
        padding: 30,

    },
    largetext: {
        fontSize: theme.typography.size.h1,
        color: theme.palette.light_text,
        textAlign: 'center',
        fontWeight: "600",
        marginTop: 16,
    },
    subtitle: {
        fontSize: theme.typography.size.basic,
        color: 'rgba(252, 252, 252, 0.7)',
    },
    button: {
        alignItems: "center",
        marginTop: 40,
        padding: 24.5,
        width: '100%',
        borderRadius: 19,
        backgroundColor: theme.palette.primary,
    },
    btnText: {
        fontSize: theme.typography.size.md,
        color: theme.palette.light_text
    }


})