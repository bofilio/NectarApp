import React, { useState } from 'react'
import { View, ImageBackground, StyleSheet, Image, Pressable, TextInput } from 'react-native'
import PhoneNumberInput from '../components/inputs/PhoneNumberInput'
import BasicText from '../components/typography/BasicText'
import H3 from '../components/typography/H3'
import theme from '../theme/theme'
import { Icon } from 'react-native-elements'

export default function Verification({ navigation }) {
    const nextScreen="Location";
    const [text, setText] = useState("")
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.bgimg} source={require("../assets/bg.png")} />
            <View style={styles.content}>
                <View>
                    <Pressable style={styles.arrowWraper} onPress={() => { navigation.goBack() }} >
                       <Icon name="arrow-back-ios" size={25} color={theme.palette.dark_text} />
                    </Pressable>
                    <H3 style={{ marginTop: 65 }}>
                        Enter your 4-digit code
                    </H3>
                    <BasicText style={{ marginTop: 25 }} color={theme.palette.gray_text}>
                        Mobile Number
                    </BasicText>
                    <TextInput keyboardType="numeric" maxLength={4} style={styles.input} placeholder='_ _ _ _' onChangeText={setText} />
                </View>

                <Pressable style={styles.button} onPress={()=>{navigation.navigate(nextScreen)}}>
                <Icon name="arrow-forward-ios" size={25} color={theme.palette.light_text} />
                </Pressable>


                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background.light
    },
    content: {
        flex: 1,
        padding: 25,
        justifyContent: "space-between"
    },
    bgimg: {
        width: '100%',
        height: 233,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    arrowWraper: {
        marginTop: 30,
        alignItems:'flex-start'
    },
    arrowIcon: {
        width: 10,
        height: 18,
    },
    input: {
        marginTop: 10,
        fontSize: theme.typography.size.h3
    },
    button: {
        backgroundColor: theme.palette.primary,
        width: 65,
        height: 65,
        alignSelf: "flex-end",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 65,

    }
})