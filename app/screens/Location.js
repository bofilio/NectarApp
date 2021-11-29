import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Pressable } from 'react-native'
import PhoneNumberInput from '../components/inputs/PhoneNumberInput'
import BasicText from '../components/typography/BasicText'
import H3 from '../components/typography/H3'
import theme from '../theme/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Picker } from '@react-native-picker/picker'
import { wilayas } from '../settings/const_data'

export default function Location({ navigation }) {
    const nextScreen = "Home"
    const [selectedLanguage, setSelectedLanguage] = useState()
    return (
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.bgimg} source={require("../assets/bg.png")} />
            <View style={styles.content}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Pressable style={styles.arrowWraper} onPress={() => { navigation.goBack() }} >
                        <Icon name="arrow-back-ios" size={25} color={theme.palette.dark_text} />
                    </Pressable>
                    <Image style={{ width: 125, height: 170 }} source={require("../assets/location.png")} />
                    <H3 style={{ marginTop: 65 }}>
                        Select Your Location
                    </H3>
                    <BasicText style={{ marginTop: 25 }} color={theme.palette.gray_text}>
                        Swithch on your location to stay in tune with
                        what’s happening in your area
                    </BasicText>
                </View>
                <View>
                    <View style={styles.pickerWraper}>
                        <Text style={styles.zoneText}>Your Zone</Text>
                        <Picker
                            style={styles.pickerText}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            {wilayas.map(w => (
                                <Picker.Item key={w.code} label={w.name} value={w.code} />
                            ))
                            }
                        </Picker>
                    </View>

                    <View style={styles.pickerWraper, { marginTop: 30 }}>
                        <Text style={styles.zoneText}>Your Area</Text>
                        <Picker
                            style={styles.pickerText}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            {wilayas.map(w => (
                                <Picker.Item key={w.code} label={w.name} value={w.code} />
                            ))
                            }
                        </Picker>
                    </View>
                    <Pressable style={styles.button} onPress={()=>{navigation.navigate(nextScreen)}}>
                        <Text style={styles.buttonText }>Submit</Text>
                    </Pressable>
                </View>
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
        alignSelf: 'flex-start'
    },
    button: {
        padding: 20,
        marginTop: 30,
        backgroundColor: theme.palette.primary,
        borderRadius: 19
    },
    buttonText: {
        color: theme.palette.light_text,
        textAlign: "center",
        fontSize: theme.typography.size.md,
        fontWeight: "bold"
    },
    zoneText: {
        color: theme.palette.gray_text,
        fontWeight: 'bold'
    },
    pickerText: {
        fontSize: theme.typography.size.md,
        color: theme.palette.dark_text
    },
    pickerWraper: {
        borderBottomWidth: 1,
        borderColor: theme.palette.gray_border
    }

})