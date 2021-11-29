import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TextInput, Pressable } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import theme from '../theme/theme';
import PhoneNumberInput from '../components/inputs/PhoneNumberInput';
export default function Signin({ navigation }) {
    const nextScreen = "Number"
    const [text, setText] = useState("+880 ")
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
            <View style={styles.container}>
                <Image resizeMode="cover" style={styles.topimg} source={require('../assets/baner.png')} />
                <View style={styles.body}>
                    <Text style={styles.title}>Get your groceries {"\n"} with nectar</Text>
                    <PhoneNumberInput style={{marginTop:30}} value={text} onChangeText={setText} onFocus={()=>{navigation.navigate(nextScreen)}} />

                    <View style={{ flex: 1, marginTop: 30, alignItems: "center" }}>
                        <Text style={{ color: theme.palette.gray_text, fontSize: theme.typography.size.sm }}>
                            Or connect with social media
                        </Text>
                        <View style={{ marginTop: 36, width: '100%' }}>
                            <Pressable style={[styles.socialButton, { backgroundColor: '#5383EC' }]}>
                                <Image resizeMode="center" style={{width:25,height:25}} source={require("../assets/icons/google.png")} />
                                <Text style={styles.socialButtonText}>Continue with Google</Text>
                            </Pressable>
                            <Pressable style={[styles.socialButton, { backgroundColor: '#4A66AC', marginTop: 20 }]}>
                                <Image resizeMode="center" style={{width:25,height:25}} source={require("../assets/icons/facebook.png")} />
                                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>

            </View>
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background.light,
    },
    topimg: {
        flex: 0.4,
        width: '100%',
    },
    body: {
        padding: 25,
        flex: 0.6
    },

    title: {
        fontSize: theme.typography.size.h3,
        fontWeight: "bold",
        color: theme.palette.dark_text,
        marginTop: 20
    },
    
    socialButton: {
        flexDirection:'row',
        width: '100%',
        paddingLeft:36,
        alignItems: "center",
        paddingVertical: 26,
        borderRadius: 19
    },
    socialButtonText: {
        flexGrow:1,
        textAlign:'center',
        fontSize: theme.typography.size.md,
        color: theme.palette.light_text
    }

})