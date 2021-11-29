import React from 'react'
import { View,Image,TextInput,StyleSheet } from 'react-native'
import theme from '../../theme/theme'
export default function PhoneNumberInput({style={},value,onChangeText,onFocus}) {
    return (
        <View style={[styles.inputwraper,style]}>
            <Image source={require("../../assets/icons/nipal.png")} />
            <TextInput maxLength={15} keyboardType="phone-pad" style={styles.input} value={value} onChangeText={onChangeText} onFocus={onFocus} />
        </View>
    )
}
const styles = StyleSheet.create({
    inputwraper: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: theme.palette.gray_border,
        paddingBottom: 12,
        
    },
    input: {
        flexGrow: 1,
        marginLeft: 12,
        fontSize: theme.typography.size.md,
    },
})